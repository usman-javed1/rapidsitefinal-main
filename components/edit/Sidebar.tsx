
"use client";

import { IconEyeSearch, IconFolderPlus, IconTemplate, IconUTurnLeft, IconUTurnRight } from '@tabler/icons-react'


import { EyeIcon, Folder, GalleryHorizontal, GalleryThumbnailsIcon, GalleryVertical, Layers, PlusIcon, Table2Icon, Tally1, Text, TextCursorIcon, TextIcon, WindIcon } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'
import { FaDesktop, FaEyeSlash, FaMobile } from 'react-icons/fa';
import SelectInput from '../SelectInput';

const Sidebar = () => {
    const icons = [{ "Icon": <PlusIcon />, active: true }, { "Icon": <GalleryVertical />, active: false }, { Icon: <TextCursorIcon />, active: false }, { Icon: <IconTemplate />, active: false }, { Icon: <IconFolderPlus />, active: false }]
    const responsiveIcons = [
        {
            Icon: <FaDesktop />,
        }, {
            Icon: <FaMobile />
        }, {
            Icon: <Table2Icon />
        }
    ]
    const [active, setActive] = useState(0)
    const [responsiveActive, setResponsiveActive] = useState(0)
    return (
        <div>
            <a href="/" className='w-[100vw] h-14 flex flex-col justify-center border-b-2 px-5  border-gray-300'>

                <span className="font-normal text-lg text-zinc-950">Chatbase</span>

            </a>
            <div className='border-r-2 h-[100vh]  border-gray-300 w-[75px] fixed left-0 top-14 bg-white'>
                <div className="sidebarIcons py-3   flex flex-col justify-center items-center" >
                    <div className="icon mt-2 bg-primary text-white text-2xl rounded-full  h-[50px] w-[50px] flex justify-center items-center">
                        <WindIcon />
                    </div>

                    <div className="icons mt-20">
                        {icons && icons.map((icon, index) => {
                            return <div className={`icon mt-6 ${active === index ? "bg-primary text-white" : "bg-white text-primary"} text-lg rounded-xl  h-[40px] w-[40px] flex justify-center items-center`} onClick={(e) => setActive(index)}>
                                {icon.Icon}
                            </div>
                        })
                        }
                    </div>

                </div>
            </div>

            <div className="h-24 border-b-2 p-5 ml-[75px] flex justify-between  border-gray-300 ">
                <div className='w-[33%]'>
                    <div className="text-2xl">
                        Bathroom Renovation Website
                    </div>
                    <div className="text-lg text-gray-400">
                        Landing Page
                    </div>
                </div>
                <div className="responsiveIcons flex w-[33%] justify-center items-center">
                    {responsiveIcons && responsiveIcons.map((icon, index) => {
                        return <div className={`icon ml-3 text-lg rounded-xl  h-[40px] w-[40px] flex justify-center items-center ${index === responsiveActive ? "bg-gray-200 text-primary" : "bg-white text-primary"}`} onClick={(e) => setResponsiveActive(index)}>
                            {icon.Icon}
                        </div>
                    })
                    }
                    <div className=" ml-5 dimension text-primary bg-gray-200 px-3 py-2 rounded-xl text-sm">
                        1440 x 700

                    </div>
                </div>
                <div className="profileSection w-[33%] flex justify-center items-center">
                    <div className="iconsProfile flex space-x-3">
                        <div className='rotate-90'><IconUTurnRight /></div>
                        <div className='-rotate-90'><IconUTurnLeft /></div>
                        <div className="ml-5"><EyeIcon /></div>
                    </div>
                    <div className="ml-5">
                        <button className='bg-blue-800 text-white px-6 p-3 rounded-full text-sm'>
                            Publish
                        </button>
                    </div>
                    <div className="profileIcon border border-gray-300 rounded-full flex ml-6 h-[40px]  w-[100px] ">
                        <Image src={'/image1.png'} width={30} height={30} alt='' className='rounded-full m-1' />
                        <span className='ml-3 mt-2'>Pro</span>
                    </div>
                </div>
            </div>
                <div className="secondSidebar ml-[75px] w-[25vw] border-r-2 h-screen fixed  border-gray-300 overflow-y-auto pb-[25vh] custom-scrollbar">
                    <div className="barHeader flex justify-between   border-b-2   border-gray-300">
                        <div className="text-lg w-[50%] justify-center items-center flex border-r-2 border-gray-300  py-5">
                            <Folder />
                            <span className='ml-3'>Creation</span>
                        </div>
                        <div className="text-lg w-[50%] justify-center items-center flex py-5">
                            <Layers />
                            <span className='ml-3'>Layers</span>
                        </div>
                    </div>

                    <div className="p-3">
                        <div className="">
                            <div className=" text-lg mb-3">
                                Generate Website
                            </div>
                            <input type="text" placeholder='Search' className='p-2 border-2 border-gray-300 rounded-full w-[100%] pl-6 mb-3' />
                            <div className=" text-lg mb-3">
                                Catagories
                            </div>
                            <div className="flex flex-wrap gap-2 mb-10">

                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                                        return <Image src={'/image1.png'} width={90} height={100} className='rounded-lg' alt='' />
                                    })
                                }
                            </div>

                            <div className=" text-lg mb-3">
                                Varients
                            </div>
                            <div className="flex flex-wrap gap-2">

                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                                        return <Image src={'/image1.png'} width={90} height={100} className='rounded-lg' alt='' />
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>

            <div className="central w-[50vw] border-r-2 border-gray-300 fixed left-[25vw] h-[100vh]">

            </div>

            <div className="rightSidebar pb-[25vh] fixed h-screen bg-red-200 w-[25vw] right-0 p-5">
                <div className="mb-5">
                    Typography
                </div>
                <div className="font">
                    <SelectInput label='Font' options={["sans","djsldj", "dasddsa", "asasfasa", "dsadasdd"]}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
