/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState } from 'react'
import { getAllHomeService,CreateHomeService,updateHomeService,DeleteHomeService, updateHomeServiceIcon } from '@/Routes/Routes'

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
  import { HomeService } from "@/utils/types/types";
  import { EditIcon, ImageIcon, Plus, Trash } from "lucide-react";
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const ServiceCards = () => {
     const [data, setData] = useState<HomeService[]>([]);
      const [open, setOpen] = useState<boolean>(false);
      const [mode, setMode] = useState<"create" | "edit" | "delete" | null>(null);
      const [selectedItem, setSelectedItem] = useState<HomeService | null>(null);
      const [currentPage, setCurrentPage] = useState(1);  // Track the current page
const [itemsPerPage] = useState<number>(5); 

      const [formData, setFormData] = useState<HomeService>({
        title: "",
        description: "",
       service_icon:"",
       slug:""
      });


       const [imagePreview, setImagePreview] = useState<string | null>(null);
      
        const tableHeaders = [
          "SNO",
          "Title",
          "Description",
          "Icon",
          "Edit",
          "Delete",
        ];
      
        useEffect(() => {
          const getHomeService = async () => {
            try {
              const res = await getAllHomeService();
              console.log(res, "Chooseus");
              setData(res.data);
            } catch (e) {
              console.error("Error fetching Service card:", e);
            }
          };
      
          getHomeService();
        }, []);
      



      
        const handleDelete = (item: HomeService) => {
          setSelectedItem(item);
          setMode("delete");
          setOpen(true);
        };
      
        const handleEdit = (item: HomeService) => {
          setSelectedItem(item);
          setMode("edit");
          setFormData({
            title: item.title,
            service_icon: item.service_icon,
            slug: item.slug,
            description: item.description,
          });
          setImagePreview(item.service_icon as any);
          setOpen(true);
        };


        const handleCreate = () => {
            setMode("create");
            setSelectedItem(null);
            setFormData({
              title: "",
              description: "",
              service_icon:"",
              slug:""
            });
            setImagePreview(null);
            setOpen(true);
          };


          const handleConfirmAction = async () => {
            // If it's a delete operation
            if (mode === "delete" && selectedItem) {
              await DeleteHomeService(selectedItem._id!);
              setData((prevData) => prevData.filter((item) => item._id !== selectedItem._id));
          
              const res = await getAllHomeService();
              setData(res.data);
            }
            // If it's an edit operation
            else if (mode === "edit" && selectedItem) {
              // Create an object for the home service update (JSON)
              const homeServiceUpdateData = {
                title: formData.title,
                description: formData.description,
                slug: formData.slug,
              };
          
              // Update the main home service with JSON data
              const homeServiceUpdate = updateHomeService(selectedItem._id!, homeServiceUpdateData!);
          
              // Update the service icon if it's provided
              let iconUpdate = Promise.resolve();
              if (formData.service_icon) {
                const iconFormData = new FormData();
                iconFormData.append("service_icon", formData.service_icon);
                iconUpdate = updateHomeServiceIcon(selectedItem._id!, iconFormData);
              }
          
              // Wait for both updates to complete concurrently
              await Promise.all([homeServiceUpdate, iconUpdate]);
          
              // Fetch the updated list of home services
              const res = await getAllHomeService();
              setData(res.data);
            }
            // If it's a create operation
            else if (mode === "create") {
              if (formData.title && formData.description && formData.slug && formData.service_icon) {
                const formDataObj = new FormData();
                formDataObj.append("title", formData.title);
                formDataObj.append("description", formData.description);
                formDataObj.append("service_icon", formData.service_icon);
                formDataObj.append("slug", formData.slug);
          
                await CreateHomeService(formDataObj);
          
                const res = await getAllHomeService();
                setData(res.data);
              }
            }
          
            setOpen(false);
          };
          
            
          
            const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setImagePreview(imageUrl); 
                setFormData((prev) => ({ ...prev, service_icon: file as any }));
              }
            };


            const totalPages = Math.ceil(data.length / itemsPerPage);
            const paginatedData = data.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            );
          
            const handleNextPage = () => {
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            };
          
            const handlePrevPage = () => {
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            };
  return (
    <div>
          <>
      <div>
        <div className="flex items-center gap-4 justify-between mb-6">
          <h2 className="lg:text-xl font-bold text-gray-800">Services</h2>
          <button
            onClick={handleCreate}
            className="flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-200 border border-blue-600"
          >
            Create Service
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
            {paginatedData.map((d, index) => (
              <TableRow key={d._id} className={`text-gray-700 hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <TableCell className="px-4 py-3 text-center border-b border-gray-200">{index + 1}</TableCell>
                <TableCell className="px-4 py-3 text-center r whitespace-nowrap border-b border-gray-200">{d.title}</TableCell>
                <TableCell className="px-4 py-3 text-center whitespace-nowrap border-b border-gray-200">{d.description}</TableCell>
                <TableCell className="px-4 py-3 text-center border-b border-gray-200">
                  <div className="flex justify-center">
                    <Image
                      src={d.service_icon!}
                      alt={d.title}
                      width={50}
                      height={50}
                      className="rounded-md shadow-sm"
                    />
                  </div>
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


            {data.length > itemsPerPage && (
                <div className="flex justify-center gap-4 items-center mt-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`p-2 text-sm rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600"} text-white`}
                  >
                    <IoIosArrowBack />
                  </button>
                  <p className="text-sm">
                    Page {currentPage} of {totalPages}
                  </p>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`p-2 text-sm rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600"} text-white`}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              )}
      </div>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent 
        className={`max-w-sm rounded-lg  ${
          mode !== "delete" ? "h-[400px]" : ""
        }  overflow-x-scroll`}
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center -mb-2">
              {mode === "delete" ? "Are you absolutely sure?" : mode === "edit" ? "Edit Service" : "Create a New Service"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {mode === "delete"
                ? "This action cannot be undone. This will permanently delete your item."
                : mode === "edit"
                ? "You can edit the details of the selected item."
                : "You can create a new Service."}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div >
            {mode === "delete" ? (
              <div className="text-center">
                <p>Are you sure you want to delete this item?</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="mb-4">
                  <label htmlFor="title"  className='font-semibold text-sm'>Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full rounded-full px-6 py-2 mb-2 placeholder:text-sm border border-gray-300 "
                    placeholder="Enter title"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className='font-semibold text-sm'>Description</label>
                  <textarea
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter description"
                  />
                </div>
                <h3 className='font-semibold text-sm'>Service Icon</h3>
                <label
                  htmlFor="choose_icon"
                  className="text-gray-700 cursor-pointer border-dashed border flex justify-center gap-2 p-3 rounded-md"
                >
                  <ImageIcon /> {imagePreview ? "Change Image" : "Select Banner Image"}
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
                  <div className="border flex justify-center">
                    <Image
                      src={imagePreview}
                      alt="Image Preview"
                      width={200}
                      height={200}
                      className="rounded-md shadow-sm"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)} className="rounded-full w-full">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmAction} className="rounded-full w-full">
              {mode === "delete" ? "Delete" : mode === "edit" ? "Save Changes" : "Create"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
    </div>
  )
}

export default ServiceCards