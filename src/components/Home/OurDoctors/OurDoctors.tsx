  "use client"

  import React, { useEffect, useState } from 'react'
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
  import { Pencil, Plus, Trash } from "lucide-react";
  import { CreateHomeDoctor, getAllDoctor, getAllHomeDoctor, updateHomeDoctor } from '@/Routes/Routes';
  import { Doctor,  OurDoctor } from '@/utils/types/types';
  import Image from 'next/image';
  import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

  const tableHeaders = [
    "Image",
    "Name",

    "Doctor Id",
    "Email",
    "Phone"
  ];







  const OurDoctors: React.FC = () => {
    const [data, setData] = useState<OurDoctor[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [mode, setMode] = useState<"create" | "edit" | null>(null);
    const [selectedItem, setSelectedItem] = useState<OurDoctor | null>(null); 
    const [searchQuery, setSearchQuery] = useState<string>(''); 
    const [formData, setFormData] = useState<{ doctors: Doctor[] }>({ doctors: [] });
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(5);
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [IsEditMode, setIsEditMode] = useState<boolean>(false);
    const [id, setId] = useState<string>("");


    useEffect(() => {
      const getData = async () => {
        const res = await getAllHomeDoctor();
        setData(res.data);
    
        if (res.data[0] && res.data.length > 0) {
          const homeDoctor = res.data[0];
          setIsEditMode(true);
          setId(homeDoctor._id);
          setSelectedItem(homeDoctor);
          setFormData({
            doctors: homeDoctor.doctors || [],
          });
        } else {
          setIsEditMode(false);
          setFormData({ doctors: [] });
        }
      };
      getData();
    }, []);
    

    console.log(formData)
    
    useEffect(() => {
      const getDoctors = async () => {
        const res = await getAllDoctor();
        setDoctors(res.data);
      };
      getDoctors();
    }, []);

  
    const handleCreate = () => {
      if (data.length > 0) {
        const homeDoctor = data[0];
        setMode("edit");
        setSelectedItem(homeDoctor);
        setIsEditMode(true);
        setFormData({
          doctors: homeDoctor.doctors || [],
        });
      } else {
        setMode("create");
        setSelectedItem(null);
        setIsEditMode(false);
        setFormData({
          doctors: [],
        });
      }
    
      setOpen(true);
    }
    


    

    const removeDoctor = (docId: string) => {
      const updatedDoctors = formData.doctors.filter((doc) => doc._id !== docId);
      setFormData({ doctors: updatedDoctors });
    };

    const handleConfirmAction = async () => {
      if (!formData.doctors) {
        alert("Please fill all the required fields.");
        return;
      }

      
      
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonData:any  = {
    doctors: formData.doctors.map((doc) => ({ _id: doc._id  })) ,
  };


      if (mode === "edit" && selectedItem) {
        await updateHomeDoctor(id, jsonData);
      } else if (mode === "create") {
        await CreateHomeDoctor(jsonData);
      }

      const res = await getAllHomeDoctor();
      setData(res.data);
      setOpen(false);
    };


    useEffect(() => {
      console.log(formData, mode === "edit" ? "During edit mode" : "During create mode");
    }, [formData,mode]); 
    

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    };

    const filteredDoctors = doctors.filter((doc) =>
      doc?.name?.toLowerCase()?.includes(searchQuery.toLowerCase())
    );

    const toggleDoctorSelection = (doc: Doctor) => {
      const isSelected = formData.doctors.some((doctor) => doctor._id === doc._id);
      const updatedDoctors = isSelected
        ? formData.doctors.filter((doctor) => doctor._id !== doc._id)
        : [...formData.doctors, doc];

      setFormData({ doctors: updatedDoctors });
    };

    const doctorsList = data[0]?.doctors || [];
    const indexOfLastDoctor = currentPage * itemsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - itemsPerPage;
    const currentDoctors = doctorsList.slice(indexOfFirstDoctor, indexOfLastDoctor);

    const totalPages = Math.ceil(doctorsList.length / itemsPerPage);

    const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
      <div className="mb-6">
        <div className="flex items-center gap-4 justify-between mb-6">
          <h2 className="lg:text-xl font-bold text-gray-800">Our Doctors</h2>
          <button
            onClick={handleCreate}
            className="flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-200 border border-blue-600"
          >
            {IsEditMode ? (
              <>Edit Doctor <Pencil /></>
            ) : (
              <>
                Add Doctor
                <Plus className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        <Table className="table-auto w-full border border-gray-200 rounded-md overflow-hidden shadow-md">
          <TableHeader>
            <TableRow className="bg-gray-100">
              {tableHeaders.map((header, index) => (
                <TableHead key={index} className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-300">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentDoctors.map((doc, index) => (
              <TableRow key={index}>
                <TableCell className="px-4 py-3">
                  <Image src={doc.doctor_image} alt={doc.name} title={doc.name} width={40} height={40} />
                </TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">{doc.name}</TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">{doc.doctor_id}</TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">{doc.email}</TableCell>
                <TableCell className="px-4 py-3 whitespace-nowrap">{doc.phone_number}</TableCell>



              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredDoctors.length > itemsPerPage && (
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

        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent className={`rounded-lg lg:h-2/3 h-[500px] lg:max-w-4xl max-w-sm overflow-x-scroll`}>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center -mb-2">
                {IsEditMode? "Edit Doctors" : "Create Doctors"}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center">
                {IsEditMode? "You can edit the existing doctors." : "You can add a new doctor."}
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="p-2">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="doctor" className="text-base mb-2">Our Doctors</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Search doctor"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="border p-2 rounded-full px-4 outline-none placeholder:text-sm"
                  />
                </div>
                {formData.doctors.length > 0 && (
                  <div className="mt-4">
                    <div className="flex min-h-[10px] max-h-[150px] overflow-scroll flex-wrap gap-2">
                      {formData.doctors.map((doc) => {
                        return (
                          doc && (
                            <div key={doc._id} className="p-1 border rounded-lg flex items-center gap-2">
                              {doc.doctor_image && (
                                <Image
                                  src={doc.doctor_image}
                                  alt={doc.name}
                                  width={100}
                                  height={100}
                                  className="w-10 h-10 object-cover rounded-full"
                                />
                              )}
                              <p className="text-sm">{doc.name}</p>
                              <button onClick={() => removeDoctor(doc._id!)} className="text-red-500 hover:text-red-700">
                                <Trash className="w-4 h-4" />
                              </button>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 p-1 min-h-[10px] max-h-[150px] overflow-y-auto">
                  {doctors
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((doc) => (
                      <div
                        key={doc._id}
                        className={`border p-2 rounded-lg cursor-pointer ${formData.doctors.some(d => d._id === doc._id) ? 'bg-blue-200' : ''}`}
                        onClick={() => toggleDoctorSelection(doc)}
                      >
                        <p className="text-sm">{doc.name}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)} className="w-full rounded-full">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirmAction} 
                          className="flex whitespace-nowrap items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-200 border border-blue-600"

              >
                {IsEditMode? "Update" : "Create"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  };

  export default OurDoctors;