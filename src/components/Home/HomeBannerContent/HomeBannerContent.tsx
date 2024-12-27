"use client";

import {
  CreateCTABanner,
  DeleteCTABanner,
  getCtABanner,
  updateCTABanner,
} from "@/Routes/Routes";
import { HomeBanner } from "@/utils/types/types";
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
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

const HomeBannerContent = () => {
  const [data, setData] = useState<HomeBanner[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<"create" | "edit" | "delete" | null>(null);
  const [selectedItem, setSelectedItem] = useState<HomeBanner | null>(null);
  const [formData, setFormData] = useState<{ image: File | null; link: string }>({
    image: null,
    link: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [youtubeVideoId, setYoutubeVideoId] = useState<string | null>(null);

  const tableHeaders = ["Image", "Link", "Edit", "Delete"];

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await getCtABanner();
        setData(res.data);
      } catch (e) {
        console.error("Error fetching banners:", e);
      }
    };

    fetchBanners();
  }, []);

  const handleDelete = (item: HomeBanner) => {
    setSelectedItem(item);
    setMode("delete");
    setOpen(true);
  };

  const handleEdit = (item: HomeBanner) => {
    setSelectedItem(item);
    setMode("edit");
    setFormData({ image: null, link: item.link });
    setImagePreview(item.image);
    setOpen(true);
  };

  const handleCreate = () => {
    setMode("create");
    setSelectedItem(null);
    setFormData({ image: null, link: "" });
    setImagePreview(null);
    setOpen(true);
  };

  const handleConfirmAction = async () => {
    const formDataObj = new FormData();

    if (mode === "delete" && selectedItem) {
      // Delete action
      await DeleteCTABanner(selectedItem._id!);
      setData((prev) => prev.filter((item) => item._id !== selectedItem._id));
    } else if ((mode === "edit" || mode === "create") && formData.image) {
      // Append form data
      formDataObj.append("image", formData.image);
      formDataObj.append("link", formData.link);

      if (mode === "edit" && selectedItem) {
        await updateCTABanner(selectedItem._id!, formDataObj);
      } else if (mode === "create") {
        await CreateCTABanner(formDataObj);
      }
    }

    const res = await getCtABanner();
    setData(res.data);
    setOpen(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const link = e.target.value;
    setFormData((prev) => ({ ...prev, link }));
    const videoId = extractYouTubeVideoId(link);
    setYoutubeVideoId(videoId);
  };

  const extractYouTubeVideoId = (url: string): string | null => {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/?)|youtu\.be\/)([^"&?/ ]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <>
      <div className="mb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Home Banner Contents</h2>
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600"
          >
            <Plus className="w-4 h-4" />
            Create Banner Content
          </button>
        </div>

        {/* Table */}
        <Table className="w-full border rounded-md shadow-md">
          <TableHeader>
            <TableRow className="bg-gray-100">
              {tableHeaders.map((header, index) => (
                <TableHead key={index} className="px-4 py-3 font-semibold text-gray-700">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d, index) => (
              <TableRow key={d._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="px-4 py-3 text-center">
                  <Image src={d.image} alt={`Banner ${index + 1}`} width={100} height={100} />
                </TableCell>
                <TableCell className="px-4 py-3">{d.link}</TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <EditIcon
                    onClick={() => handleEdit(d)}
                    className="cursor-pointer text-blue-500"
                  />
                </TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <Trash
                    onClick={() => handleDelete(d)}
                    className="cursor-pointer text-red-500"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Dialog */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className={`max-w-sm rounded-lg  ${
      mode !== "delete" ? "h-[400px]" : ""
    }  overflow-x-scroll`}>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center -mb-2">
              {mode === "delete" ? "Confirm Deletion" : mode === "edit" ? "Edit Banner Content" : "Create Banner Content"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-gray-500 text-sm">
              {mode === "delete"
                ? "This action cannot be undone. This will permanently delete your item."
                : mode === "edit"
                ? "You can edit the details of the selected item."
                : "You can create a new Banner Contents."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="p-4">
            {mode === "delete" ? (
              <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            ) : (
              <>

  <div className="flex flex-col gap-4  mb-4">
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
                  <div className="border rounded-lg flex justify-center">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      title="Preview"
                      width={100}
                      priority
                      height={100}
                      className="rounded-md shadow-sm"
                    />
                  </div>
                )}
              </div>

                <div className="flex flex-col gap-4">


                 
                  <label className="font-medium">Link (YouTube or other)</label>
                  <input
                    type="text"
                    value={formData.link}
                    onChange={handleLinkChange}
                    className="w-full  outline-none rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 "
                  />
                  {youtubeVideoId && (
                    <iframe
                      width="100%"
                      height="200"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                      title="YouTube Video Preview"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </>
            )}
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)} className="rounded-full w-full">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmAction}  className="w-full rounded-full">
              {mode === "delete" ? "Delete" : "Save"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default HomeBannerContent;
