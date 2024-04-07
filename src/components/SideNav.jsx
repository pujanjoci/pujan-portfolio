import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineClose } from 'react-icons/ai';
import { BsPerson } from "react-icons/bs";

const SideNav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div style={{ position: 'relative' }}>
            {nav ? (
                <AiOutlineClose onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
            ) : (
                <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
            )}

            {nav ? (
                <div className="fixed w-full h-screen bg-black/90 px-4 py-7 flex flex-col justify-center items-center z-20" onClick={closeNav}>
                    <a href="#main" className="w-[50%] flex justify-center items-center rounded-full  mb-4 shadow-lg bg-gray-300 shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-200]">
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>
                    <a href="#about" className="w-[50%] flex justify-center items-center rounded-full  mb-4 shadow-lg bg-gray-300 shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-200]">
                        <BsPerson size={20} />
                        <span className="pl-4">About-Me</span>
                    </a>
                    <a href="#resume" className="w-[50%] flex justify-center items-center rounded-full  mb-4 shadow-lg bg-gray-300 shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-200]">
                        <AiOutlineProject size={20} />
                        <span className="pl-4">Resume</span>
                    </a>
                    <a href="#contacts" className="w-[50%] flex justify-center items-center rounded-full  mb-4 shadow-lg bg-gray-300 shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-200]">
                        <AiOutlineMail size={20} />
                        <span className="pl-4">Contacts</span>
                    </a>
                </div>
            ) : null}

            <div className="md:block hidden fixed top-[30%] right-0 z-10">
                <div className="flex flex-col justify-center items-center h-full">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsPerson size={20} />
                    </a>
                    <a href="#resume" className="rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#contacts" className="rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SideNav;
