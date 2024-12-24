"use client"

import { getAllDoctor } from '@/Routes/Routes'
import { Doctor } from '@/utils/types/types'
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'

const tableHeaders = [
    "SL No",
    "Image",
    "Name",
    "Doctor Id",
    "Hospital",
    "Email",
    "Phone",
    "Experience"
];

const Doctors = () => {
    const [data, setData] = useState<Doctor[]>([]);
    const [filteredData, setFilteredData] = useState<Doctor[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(10);

    // Fetching doctors
    useEffect(() => {
        const getDoctors = async () => {
            const res = await getAllDoctor();
            setData(res.data);
            setFilteredData(res.data);
        };
        getDoctors();
    }, []);

    // Handle search input
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Filter doctors by name and doctor_id based on search query
        const filtered = data.filter(doc =>
            doc.name.toLowerCase().includes(query.toLowerCase()) ||
            doc.doctor_id.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
        setCurrentPage(1); // Reset to first page when searching
    };

    // Pagination Logic
    const indexOfLastDoctor = currentPage * itemsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - itemsPerPage;
    const currentDoctors = filteredData.slice(indexOfFirstDoctor, indexOfLastDoctor);

    // Calculate total pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className='p-6'>
            {/* Search Bar */}
            <div className="flex mb-6 justify-center">
                <div className="w-full max-w-2xl">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search doctors by name or Doctor ID"
                        className="border rounded-full px-8 placeholder:text-sm w-full outline-none p-2 "
                    />
                </div>
            </div>

            {/* Doctors List */}
            {filteredData.length === 0 ? (
                <p className="text-center text-lg text-gray-500">No doctors found matching your query.</p>
            ) : (
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
                                {/* Calculate Serial No based on currentPage and index */}
                                <TableCell className="px-4 py-3">{indexOfFirstDoctor + index + 1}</TableCell>
                                <TableCell className="px-4 py-3">
                                    <Image src={doc.doctor_image} alt={doc.name} title={doc.name} width={40} height={40} />
                                </TableCell>
                                <TableCell className="px-4 py-3">{doc.name}</TableCell>
                                <TableCell className="px-4 py-3">{doc.doctor_id}</TableCell>
                                <TableCell className="px-4 py-3">{doc?.hospital?.hospital_name || "NA"}</TableCell>
                                <TableCell className="px-4 py-3">{doc.email}</TableCell>
                                <TableCell className="px-4 py-3">{doc.phone_number}</TableCell>
                                <TableCell className="px-4 py-3">{doc.experience}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

            {/* Pagination Controls */}
            {filteredData.length > itemsPerPage && (
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
    );
};

export default Doctors;
