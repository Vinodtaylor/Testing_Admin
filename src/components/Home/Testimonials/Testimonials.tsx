/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
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
import { Testimonail } from "@/utils/types/types";
import { EditIcon, Plus, Trash } from "lucide-react";
import {
  CreateHometestimonials,
  getAllHometestimonials,
  updateHometestimonials,
  DeleteHometestimonials,
} from "@/Routes/Routes";

const Testimonials: React.FC = () => {
  const [data, setData] = useState<Testimonail[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<"create" | "edit" | "delete" | null>(null);
  const [selectedItem, setSelectedItem] = useState<Testimonail | null>(null);
  const [formData, setFormData] = useState<Testimonail>({
    title: "",
    description: "",
    date: "",
    role: "",
    youtube_link: "",
  });

  const [youtubeVideoId, setYoutubeVideoId] = useState<string | null>(null);

  const tableHeaders = [
    "SNO",
    "Title",
    "Description",
    "Date",
    "Role",
    "Preview",
    "Edit",
    "Delete",
  ];

  useEffect(() => {
    const getTestimonails = async () => {
      try {
        const res = await getAllHometestimonials();
        setData(res.data);
      } catch (e) {
        console.error("Error fetching testimonials:", e);
      }
    };

    getTestimonails();
  }, []);

  const extractYouTubeVideoId = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/?([^"&?/ ]+)|(?:[^\/\n\s]+\/\S+\/)*\S+[^"&?/ ]+))|(?:youtu\.be\/([^"&?/ ]+))/;
    const match = url.match(regex);
    return match ? match[1] || match[2] : null;
  };

  const handleYouTubeLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setFormData({ ...formData, youtube_link: url });

    const videoId = extractYouTubeVideoId(url);
    setYoutubeVideoId(videoId);
  };

  const handleDelete = (item: Testimonail) => {
    setSelectedItem(item);
    setMode("delete");
    setOpen(true);
  };

  const handleEdit = (item: Testimonail) => {
    setSelectedItem(item);
    setMode("edit");
    setFormData({
      title: item.title,
      role: item.role,
      youtube_link: item.youtube_link,
      date: item.date,
      description: item.description,
    });
    setYoutubeVideoId(extractYouTubeVideoId(item.youtube_link)); // Extract video ID on edit
    setOpen(true);
  };

  const handleCreate = () => {
    setMode("create");
    setSelectedItem(null);
    setFormData({
      title: "",
      description: "",
      youtube_link: "",
      date: "",
      role: "",
    });
    setYoutubeVideoId(null); // Clear video ID on create
    setOpen(true);
  };

  const handleConfirmAction = async () => {
    if (!formData.title || !formData.description || !formData.role || !formData.date || !formData.youtube_link) {
      alert("Please fill all the required fields: Title, Description, Role, Date, and YouTube Link.");
      return;
    }

    const jsonData = {
      title: formData.title,
      description: formData.description,
      role: formData.role,
      date: formData.date,
      youtube_link: formData.youtube_link,
    };

    if (mode === "delete" && selectedItem) {
      await DeleteHometestimonials(selectedItem._id!);
      setData((prevData) => prevData.filter((item) => item._id !== selectedItem._id));

      const res = await getAllHometestimonials();
      setData(res.data);
    } else if (mode === "edit" && selectedItem) {
      await updateHometestimonials(selectedItem._id!, jsonData);

      const res = await getAllHometestimonials();
      setData(res.data);
    } else if (mode === "create") {
      await CreateHometestimonials(jsonData);

      const res = await getAllHometestimonials();
      setData(res.data);
    }

    setOpen(false);
  };

  return (
    <>
      <div className="mb-6">
        <div className="flex items-center gap-4 justify-between mb-6">
          <h2 className="lg:text-xl font-bold text-gray-800">Video testimonials</h2>
          <button
            onClick={handleCreate}
            className="flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-200 border border-blue-600"
          >
            Create testimonials
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
                <TableCell className="px-4 py-3 text-center r whitespace-nowrap border-b border-gray-200">{d.title}</TableCell>
                <TableCell className="px-4 py-3 text-center  border-b border-gray-200">
                <p className="text-left whitespace-nowrap">
  {d.description.length > 50 
    ? `${d.description.slice(0, 50)}...` 
    : d.description}
</p>
                </TableCell>
                <TableCell className="px-4 py-3 text-center border-b border-gray-200">{d.date}</TableCell>

                <TableCell className="px-4 py-3 text-center border-b border-gray-200">{d.role}</TableCell>
                <TableCell className="px-4 py-3 text-center border-b border-gray-200">
  {d.youtube_link && (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <iframe
        className="w-full h-[150px] sm:h-[250px] md:h-[200px] border-0"
        src={`https://www.youtube.com/embed/${extractYouTubeVideoId(d.youtube_link)}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )}
</TableCell>

                <TableCell className="px-4 py-3 text-center border-b border-gray-200">
                  <div className="flex justify-center">
                    <EditIcon onClick={() => handleEdit(d)} className="cursor-pointer text-blue-500 hover:text-blue-600" />
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-center border-b border-gray-200">
                  <div className="flex justify-center">
                    <Trash onClick={() => handleDelete(d)} className="cursor-pointer text-red-500 hover:text-red-600" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className={`max-w-sm rounded-lg  ${
      mode !== "delete" ? "h-[400px]" : ""
    }  overflow-x-scroll`}>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center -mb-2">
              {mode === "delete" ? "Are you absolutely sure?" : mode === "edit" ? "Edit Testimonial" : "Create Testimonial"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {mode === "delete"
                ? "This action cannot be undone. This will permanently delete your item."
                : mode === "edit"
                ? "You can edit the details of the selected item."
                : "You can create a new testimonial."}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="">
            {mode === "delete" ? (
              <div className="text-center">
                <p>Are you sure you want to delete this item?</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="">
                  <label htmlFor="title" className="font-semibold">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full  outline-none rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 "
                    placeholder="Enter title"
                  />
                </div>
                <div className="">
                  <label htmlFor="description" className="font-semibold">Description</label>
                  <textarea
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full  outline-none  px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter description"
                  />
                </div>
                <div className="">
                  <label htmlFor="role"className="font-semibold">Role</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full  outline-none  rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 "
                    placeholder="Enter role"
                  />
                </div>

                <div className="">
                  <label htmlFor="date" className="font-semibold">Date</label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full  outline-none  rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 "
                    placeholder="Enter date"
                  />
                </div>

                <div className="">
                  <label htmlFor="youtube_link" className="font-semibold">YouTube Link</label>
                  <input
                    type="text"
                    value={formData.youtube_link}
                    onChange={handleYouTubeLinkChange}
                    className="w-full  outline-none  rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 "
                    placeholder="Enter YouTube link"
                  />
                </div>

                {youtubeVideoId && (
                  <div className="flex justify-center">
                    <iframe
                      width="100%"
                      height="200"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            )}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)} className="w-full rounded-full">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmAction}  className="w-full rounded-full">
              {mode === "delete" ? "Delete" : mode === "edit" ? "Update" : "Create"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Testimonials;
