"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FaDesktop, FaMobile } from 'react-icons/fa';
import { IconTemplate, IconFolderPlus, IconUTurnLeft, IconUTurnRight, IconMenu } from '@tabler/icons-react';
import { GalleryVertical, PlusIcon, Table2Icon, TextCursorIcon, WindIcon, EyeIcon, MessageCircleCode, PanelTopIcon, ZoomIn, ZoomOut, Minimize2, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import ClientEditor from '../ClientEditor';
import Link from 'next/link';

interface ClientEditorProps {
    content: string;
    userId: string;
    websiteId: string;
}

const Sidebar: React.FC<ClientEditorProps> = ({ content, userId, websiteId }) => {
    const icons = [
        { Icon: <PlusIcon />, active: true },
        { Icon: <MessageCircleCode />, active: false },
        { Icon: <PanelTopIcon />, active: false },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const saveButtonRef = useRef<HTMLElement>(null);
    const controll1Ref = useRef<HTMLElement>(null);
    const controll2Ref = useRef<HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const zoomIn = useRef<HTMLElement>(null);
    const zoomOut = useRef<HTMLElement>(null);

    const scrollByOffset = (offset: number) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += offset;
        }
    };

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (scrollContainerRef.current) {
            setIsMouseDown(true);
            setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
            setStartY(e.pageY - scrollContainerRef.current.offsetTop);
            setScrollLeft(scrollContainerRef.current.scrollLeft);
            setScrollTop(scrollContainerRef.current.scrollTop);
        }
    };

    const onMouseMove = (e: MouseEvent) => {
        if (isMouseDown && scrollContainerRef.current) {
            const x = e.pageX - scrollContainerRef.current.offsetLeft;
            const y = e.pageY - scrollContainerRef.current.offsetTop;
            const walkX = (x - startX) * 1; // Adjust the multiplier for speed
            const walkY = (y - startY) * 1; // Adjust the multiplier for speed
            scrollContainerRef.current.scrollLeft = scrollLeft - walkX;
            scrollContainerRef.current.scrollTop = scrollTop - walkY;
        }
    };

    const onMouseUpOrLeave = () => {
        setIsMouseDown(false);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => onMouseMove(e);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', onMouseUpOrLeave); // Stop dragging when mouse is released

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', onMouseUpOrLeave);
        };
    }, [isMouseDown, startX, startY, scrollLeft, scrollTop]);

    const responsiveIcons = [
        { Icon: <FaDesktop /> },
        { Icon: <FaMobile /> },
        { Icon: <Table2Icon /> }
    ];

    const [active, setActive] = useState(0);
    const [responsiveActive, setResponsiveActive] = useState(0);
    const [controller, setController] = useState("none");

    return (
        <div>
            <div className='w-[100vw] h-14 flex  items-center justify-between border-b-2 px-5 border-gray-300'>

                <Link href={'/'} className="font-normal text-lg text-zinc-950">Chatbase</Link>
                <div onClick={() => { setMenuOpen(!menuOpen); console.log("Hello", menuOpen); }}>
                    <IconMenu />
                </div>
            </div>



            
            




            {
                <div className={`border-r-2 h-[100vh] border-gray-300 lg:w-[75px] w-[50px] fixed left-0 top-14 bg-white lg:block md:block  ${menuOpen?"block": "hidden"}`} style={{zIndex: 9999999999}}>
                    <div className="sidebarIcons py-3 flex flex-col justify-center items-center">
                        <div className="icon mt-2 bg-primary text-white lg:text-2xl text-lg rounded-full lg:h-[50px] lg:w-[50px] h-[40px] w-[40px] flex justify-center items-center">
                            <WindIcon />
                        </div>
                        <div className="icons mt-20">
                            {icons.map((icon, index) => (
                                <div
                                    key={index}
                                    className={`icon mt-6 ${active === index ? "bg-primary text-white" : "bg-white text-primary"} text-lg rounded-xl h-[40px] w-[40px] flex justify-center items-center`}
                                    onClick={() => setActive(index)}
                                >
                                    {icon.Icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>}
            <div className="h-24 border-b-2 p-5 lg:ml-[75px] md:ml-[50px] ml-0 flex justify-between border-gray-300">
                <div className='lg:w-[33%] w-[97%]'>
                    <div className="lg:text-2xl md:text-xl text-base">Bathroom Renovation Website</div>
                    <div className="lg:text-lg md:text-base text-sm text-gray-400">Landing Page</div>
                </div>
                <div className="responsiveIcons flex w-[33%] justify-center items-center">
                    {
                    }

                </div>
                <div className="profileSection w-[37%] flex justify-center items-center">
                    <div className="iconsProfile flex space-x-3">
                        <div className='rotate-90 lg:block hidden'
                            onClick={() => scrollByOffset(-100)}
                        ><IconUTurnRight /></div>
                        <div className='-rotate-90  lg:block hidden'
                            onClick={() => { scrollByOffset(100); console.log("Hello") }}
                        ><IconUTurnLeft /></div>
                        <div className="ml-5  lg:block hidden"><EyeIcon /></div>
                    </div>
                    <div className="ml-5 lg:block  hidden">
                        <button className='bg-blue-800 text-white px-6 p-3 rounded-full text-sm'>
                            Publish
                        </button>
                    </div>
                    <div className="profileIcon border border-gray-300 rounded-full  ml-6 h-[40px] w-[100px] lg:flex hidden">
                        <Image src={'/image1.png'} width={30} height={30} alt='' className='rounded-full m-1' />
                        <span className='ml-3 mt-2'>Pro</span>
                    </div>

                    <div className="ml-5">
                        <button className='bg-blue-800 text-white px-6 p-3 rounded-full text-sm' onClick={() => saveButtonRef.current?.click()}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div className={`secondSidebar lg:ml-[75px] lg:w-[25vw] md:w-[30vw] w-[87vw] border-r-2 h-screen fixed border-gray-300 overflow-y-auto custom-scrollbar lg:p-5 md:p-2 p-5 lg:top-auto md:top-auto top-[50px] md:ml-[50px] lg:block md:block ${menuOpen ? "block" : "hidden"} md:right-auto lg:right-auto right-0 md:left-auto lg:left-auto  bg-white`} style={{ paddingBottom: "30vh",zIndex: 999999 }}>
                {active === 0 && <div><div className="div text-xl text-primary py-2 border-b-2 border-gray-300">
                    Basic Editor
                </div>
                    <div className="mt-5 border-b-2 border-gray-300 pb-2">

                        <div className="Text lg:text-lg text-base text-primary">
                            Pick the Element
                        </div>
                        <p className='text-sm text-gray-500 my-5'>
                            Pick the element to edit. Which element you to pick just click on this we will automatically select that element to edit
                        </p>
                        <button onClick={() => {
                            controll1Ref.current?.click();
                            setController(controller === "pick" ? "none" : "pick")
                        }}
                            className={`w-full  p-2 lg:text-lg text-base rounded-xl text-center hover:bg-white hover:border-2 hover:border-primary hover:text-primary transition-all duration-200 ${controller === "pick" ? "bg-secondary text-white border-2" : "bg-primary text-white border-2"}`}
                        >
                            {controller === "pick" ? "Enable pick element" : "Pick the Element"}
                        </button>
                    </div>

                    <div className="mt-5 border-b-2 border-gray-300 pb-2">
                        <div className="Text lg:text-lg text-base text-primary">
                            Edit the Element
                        </div>
                        <p className='text-sm text-gray-500 my-5'>
                            Pick the element to edit. Which element you to pick just click on this we will automatically select that element to edit
                        </p>
                        <button onClick={() => {
                            controll2Ref.current?.click();
                            setController(controller === "edit" ? "none" : "edit")
                        }}
                            className={`w-full  p-2 lg:text-lg text-base rounded-xl text-center hover:bg-white hover:border-2 hover:border-primary hover:text-primary transition-all duration-200 ${controller === "edit" ? "bg-secondary text-white border-2" : "bg-primary text-white border-2"}`}
                        >
                            {controller === "edit" ? "Enable edit element" : "Edit the Element"}
                        </button>
                    </div>
                </div>}

                {active === 1 && <div>
                    <div className="div text-xl text-primary py-2 border-b-2 border-gray-300">
                        Chat Support
                    </div>
                </div>}
                {active === 2 && <div>
                    <div className="div text-xl text-primary py-2 border-b-2 border-gray-300">
                        Page Panel
                    </div>
                </div>}

            </div>

            <div className="central-wrapper">
                <div
                    className="central lg:w-[70vw] w-[100vw] border-r-2 border-gray-300 fixed lg:left-[32vw] md:left-[40vw] -left-2 h-[100vh] lg:p-16 md:p-16 p-0 overflow-scroll  cursor-grab active:cursor-grabbing"
                    ref={scrollContainerRef}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUpOrLeave}
                    onMouseLeave={onMouseUpOrLeave}
                >

                    <div
                        className="content lg:w-[100vw] w-[150vw] h-[800vh]"
                        onMouseDown={(e) => e.stopPropagation()}
                        style={{ paddingBottom: "70vh" }}
                    >
                        <ClientEditor
                            content={content}
                            userId={userId}
                            websiteId={websiteId}
                            controll1Ref={controll1Ref}
                            controll2Ref={controll2Ref}
                            saveButtonRef={saveButtonRef}
                            zoomInRef={ZoomIn}
                            zoomOutRef={ZoomOut}
                        />
                    </div>
                </div>

            </div>



            


        </div>
    );
};

export default Sidebar;
