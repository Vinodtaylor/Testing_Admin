/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CreateCTABanner, DeleteCTABanner, getCtABanner, updateCTABanner } from "@/Routes/Routes";
import { HomeCTABannerImage } from "@/utils/types/types";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { EditIcon, ImageIcon, Plus, Trash } from "lucide-react";
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
import compressImage from "@/utils/imageConversion/ConvertImage";

const HomeCTABanner = () => {
  const [data, setData] = useState<HomeCTABannerImage[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<"create" | "edit" | "delete" | null>(null);
  const [selectedItem, setSelectedItem] = useState<HomeCTABannerImage | null>(null);
  const [formData, setFormData] = useState<{ home_page_banner?: File | string }>({});
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Image preview state

  const tableHeaders = [ "Image", "Edit", "Delete"];

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await getCtABanner();
        console.log("CTA Banner Response:", res);
        setData(res.data);
      } catch (e) {
        console.error("Error fetching CTA banner:", e);
      }
    };

    fetchBanner();
  }, []);

  const handleDelete = (item: HomeCTABannerImage) => {
    setSelectedItem(item);
    setMode("delete");
    setOpen(true);
  };

  const handleEdit = (item: HomeCTABannerImage) => {
    setSelectedItem(item);
    setMode("edit");
    setFormData({ home_page_banner: item.home_page_banner });
    setImagePreview(item.home_page_banner);
    setOpen(true);
  };

  const handleCreate = () => {
    setMode("create");
    setSelectedItem(null);
    setFormData({});
    setImagePreview(null); 
    setOpen(true);
  };



  const handleConfirmAction = async () => {
    const formDataObj = new FormData();
  
    // Check if home_page_banner is a valid value and handle file appending
    if (formData.home_page_banner) {
      const banner = formData.home_page_banner;
      if (banner instanceof Blob) {
        const file = new File([banner], banner.name || "uploaded_image.png", { type: banner.type });
        formDataObj.append("home_page_banner", file);
      } else if (banner as any instanceof File) {
        formDataObj.append("home_page_banner", banner);
      }
    }
  
    if (mode === "delete" && selectedItem) {
      // Delete action
      await DeleteCTABanner(selectedItem._id!);
      console.log("Deleting item:", selectedItem);
      setData((prevData) => prevData.filter(item => item._id !== selectedItem._id));
  
      const res = await getCtABanner();
      setData(res.data);
    } else if (mode === "edit" && selectedItem) {
      // Edit action
      console.log("Editing item:", formData);
  
      if (formData.home_page_banner && formData.home_page_banner instanceof File) {
        formDataObj.append("home_page_banner", formData.home_page_banner);
      }
  
      await updateCTABanner(selectedItem._id!, formDataObj);
      const res = await getCtABanner();
      setData(res.data);
    } else if (mode === "create") {
      // Create action
      console.log("Creating a new item:", formData);
  
      if (formData.home_page_banner && formData.home_page_banner instanceof File) {
        formDataObj.append("home_page_banner", formData.home_page_banner);
      }
  
      await CreateCTABanner(formDataObj);
  
      const res = await getCtABanner();
      setData(res.data);
    }
  
    setOpen(false);
  };
  
  

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const uploadedImage = await compressImage(file);
        const imageUrl = URL.createObjectURL(uploadedImage);
        setImagePreview(imageUrl);
  
        setFormData((prev) => ({ ...prev, home_page_banner: uploadedImage }));
      } catch (error) {
        console.error("Error compressing the image:", error);
      }
    }
  };
  
  return (
    <>
      <div className="mb-6">
        {/* Header Section */}
        <div className="flex items-center gap-4 justify-between mb-6">
          <h2 className="lg:text-xl  font-bold text-gray-800">Home CTA Banner</h2>
          <button
            onClick={handleCreate}
            className="flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-200 border border-blue-600"
          >
            Create CTA Banner
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Table Section */}
        <Table className="table-auto w-full border border-gray-200 rounded-md overflow-hidden shadow-md">
          <TableHeader>
            <TableRow className="bg-gray-100">
              {tableHeaders.map((header, index) => (
                <TableHead
                  key={index}
                  className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-300"
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d, index) => (
              <TableRow
                key={d._id}
                className={`text-gray-700 hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
               

                {/* Banner Image */}
                <TableCell className="px-4 py-3 text-center border-b border-gray-200">
                  <div className="">
                    <Image
                      src={d?.home_page_banner}
                      alt={`Home CTA Banner ${index + 1}`}
                      width={300}
                      height={300}
                      className="rounded-md shadow-sm"
                    />
                  </div>
                </TableCell>

                {/* Edit */}
                <TableCell className="px-4 py-3 text-center border-b border-gray-200">
                  <div className="">
                    <EditIcon
                      onClick={() => handleEdit(d)}
                      className="cursor-pointer text-blue-500 hover:text-blue-600"
                    />
                  </div>
                </TableCell>

                {/* Delete */}
                <TableCell className="px-4 py-3 text-center border-b border-gray-200">
                  <div className="">
                    <Trash
                      onClick={() => handleDelete(d)}
                      className="cursor-pointer text-red-500 hover:text-red-600"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Alert Dialog */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="max-w-sm rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center -mb-2">
              {mode === "delete" ? "Are you absolutely sure?" : mode === "edit" ? "Edit Banner" : "Create Banner"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {mode === "delete"
                ? "This action cannot be undone. This will permanently delete your item."
                : mode === "edit"
                ? "You can edit the details of the selected item."
                : "You can create a new CTA banner."}
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* Conditional Form Rendering */}
          <div className="p-4">
            {mode === "delete" ? (
              <div className="text-center">
                <p>Are you sure you want to delete this item?</p>
              </div>
            ) : mode === "edit" || mode === "create" ? (
              <div className="flex flex-col gap-4">
                <h3 className="text-sm">CTA Banner Image</h3>
                <label htmlFor="home_page_banner" className="text-gray-700 cursor-pointer   border-dashed border flex  justify-center  gap-2 p-3 rounded-md ">
                <ImageIcon/>  {imagePreview ? "Change Image" : "Select Banner Image"}
                </label>
                <input
                  id="home_page_banner"
                  name="home_page_banner"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden" 
                />

                {/* Image Preview */}
                {imagePreview && (
                  <div className="border flex justify-center">
                    <Image
                      src={imagePreview}
                      alt="Image Preview"
                      width={500}
                      priority
                      height={500}
                      className="rounded-md shadow-sm"
                    />
                  </div>
                )}
              </div>
            ) : null}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)} className="rounded-full w-full">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmAction}             className="flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-200 border border-blue-600"
            >
              {mode === "delete" ? "Delete" : mode === "edit" ? "Save Changes" : "Create"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default HomeCTABanner;
