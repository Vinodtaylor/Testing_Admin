/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  getAllHomeServiceCard,
  CreateHomeServiceCard,
  updateHomeServiceCard,
  DeleteHomeServiceCard,
} from "@/Routes/Routes";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HomeServiceCard } from "@/utils/types/types";
import { EditIcon, ImageIcon, Plus, Trash } from "lucide-react";
import Image from "next/image";

const ServiceCards = () => {
  const [data, setData] = useState<HomeServiceCard[]>([]);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit" | "delete" | null>(null);
  const [selectedItem, setSelectedItem] = useState<HomeServiceCard | null>(null);
  const [formData, setFormData] = useState<HomeServiceCard>({
    title: "",
    description: "",
    service_icon: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const tableHeaders = ["SNO", "Title", "Description", "Icon", "Edit", "Delete"];

  useEffect(() => {
    const fetchHomeServiceCards = async () => {
      try {
        const res = await getAllHomeServiceCard();
        setData(res.data);
      } catch (error) {
        console.error("Error fetching service cards:", error);
      }
    };

    fetchHomeServiceCards();
  }, []);

  const handleDelete = (item: HomeServiceCard) => {
    setSelectedItem(item);
    setMode("delete");
    setOpen(true);
  };

  const handleEdit = (item: HomeServiceCard) => {
    setSelectedItem(item);
    setMode("edit");
    setFormData({
      title: item.title,
      description: item.description,
      service_icon: item.service_icon,
    });
    setImagePreview(item.service_icon);
    setOpen(true);
  };

  const handleCreate = () => {
    setMode("create");
    setSelectedItem(null);
    setFormData({
      title: "",
      description: "",
      service_icon: "",
    });
    setImagePreview(null);
    setOpen(true);
  };

  const handleConfirmAction = async () => {
    try {
      if (mode === "delete" && selectedItem) {
        await DeleteHomeServiceCard(selectedItem._id!);
        setData((prev) => prev.filter((item) => item._id !== selectedItem._id));
      } else if (mode === "edit" && selectedItem) {
        const formDataObj = new FormData();
        formDataObj.append("title", formData.title);
        formDataObj.append("description", formData.description);
        formDataObj.append("service_icon", formData.service_icon);

        await updateHomeServiceCard(selectedItem._id!, formDataObj);
      } else if (mode === "create") {
        const formDataObj = new FormData();
        formDataObj.append("title", formData.title);
        formDataObj.append("description", formData.description);
        formDataObj.append("service_icon", formData.service_icon!);

        await CreateHomeServiceCard(formDataObj);
      }

      const res = await getAllHomeServiceCard();
      setData(res.data);
    } catch (error) {
      console.error("Error performing action:", error);
    } finally {
      setOpen(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setFormData((prev) => ({ ...prev, service_icon: file as any }));
    }
  };

  return (
    <div className="
    mb-6">
      <div className="flex items-center gap-4 justify-between mb-6">
        <h2 className="lg:text-xl font-bold text-gray-800">Service Cards</h2>
        <button
          onClick={handleCreate}
          className="flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-200 border border-blue-600"
        >
          Create Service Card
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <Table className="table-auto w-full border border-gray-200 rounded-md overflow-hidden shadow-md">
        <TableHeader>
          <TableRow className="bg-gray-100">
            {tableHeaders.map((header, index) => (
              <TableHead key={index} className="px-4 py-3 font-semibold text-center text-gray-700 border-b border-gray-300">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d, index) => (
            <TableRow key={d._id} className={`text-gray-700 hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <TableCell className="px-4 py-3 text-center border-b border-gray-200">{index + 1}</TableCell>
              <TableCell className="px-4 py-3 text-center whitespace-nowrap border-b border-gray-200">{d.title}</TableCell>
              <TableCell className="px-4 py-3 text-center whitespace-nowrap border-b border-gray-200">{d.description}</TableCell>
              <TableCell className="px-4 py-3 text-center border-b border-gray-200">
                <Image src={d.service_icon!} alt={d.title} width={50} height={50} className="rounded-md shadow-sm" />
              </TableCell>
              <TableCell className="px-4 py-3 text-center border-b border-gray-200">
                <EditIcon onClick={() => handleEdit(d)} className="cursor-pointer text-blue-500 hover:text-blue-600" />
              </TableCell>
              <TableCell className="px-4 py-3 text-center border-b border-gray-200">
                <Trash onClick={() => handleDelete(d)} className="cursor-pointer text-red-500 hover:text-red-600" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className={`max-w-sm rounded-lg  ${
      mode !== "delete" ? "h-[400px]" : ""
    }  overflow-x-scroll`}>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center -mb-2">
              {mode === "delete" ? "Are you absolutely sure?" : mode === "edit" ? "Edit Service Card" : "Create Service Card"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {mode === "delete"
                ? "This action cannot be undone. This will permanently delete your item."
                : mode === "edit"
                ? "You can edit the details of the selected service card."
                : "You can create a new service card."}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div>
            {mode === "delete" ? (
              <p className="text-center">Are you sure you want to delete this service card?</p>
            ) : (
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="title" className="block font-semibold text-sm text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    className="w-full rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 "
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block font-semibold text-sm text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                 
                                 <h3 className="text-sm font-semibold">Service card Icon</h3>
                                 <label
                                   htmlFor="choose_icon"
                                   className="text-gray-700 cursor-pointer border-dashed border flex justify-center gap-2 p-3 rounded-md"
                                 >
                                   <ImageIcon /> {imagePreview ? "Change Icon" : "Select Icon"}
                                 </label>
                                 <input
                                   id="choose_icon"
                                   name="choose_icon"
                                   type="file"
                                   accept="image/*"
                                   onChange={handleImageChange}
                                   className="hidden"
                                 />
                
                  {imagePreview && (
                    <div className="mt-2 flex justify-center ">
                      <Image src={imagePreview} alt="Preview" width={200} height={200} className="rounded-md" />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full w-full">Cancel</AlertDialogCancel>
            <AlertDialogAction className="rounded-full w-full" onClick={handleConfirmAction}>
              {mode === "delete" ? "Delete" : mode === "edit" ? "Save Changes" : "Create"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ServiceCards;
