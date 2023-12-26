import { useState } from "react"
import { DownArrow2 }  from "../icons/downArrow.tsx"

export const Menu = ({ selected }:{ selected: string }) => {

    const [menu, setMenu] = useState(false)
    const [open, setOpen] = useState('none')

    return (
        <>
            <div className="text-white w-full lg:hidden flex justify-end items-center">
                <button onClick={() => setMenu(true)}>
                    <img className="h-10 w-10" src="/images/menu.png" alt="logo menu" />
                </button>
            </div>
            <div className={menu ? 'fixed lg:hidden w-full md:w-2/4 top-0 right-0 h-full z-[1000] transition-all bg-black':'w-0 transition-all lg:hidden overflow-hidden'}>
                <div className="w-full flex justify-between px-10 items-center h-20 mt-10">
                    <a href="/">
                        <img src="/images/logo.png" alt="logo menu responsive" />
                    </a>
                    <button onClick={() => setMenu(false)}>
                        <img className="w-10 h-10" src="/images/close.png" alt="logo menu close" />
                    </button>
                </div>
                <div className="w-full px-10 mt-10 h-72 xs:h-96 overflow-scroll">
                    <ul className="flex [&>div>ul>li]:mt-2 flex-col [&>li]:h-full h-full capitalize text-softGray [&>li]:cursor-pointer [&>li]:transition-all">
                        <li onClick={() => setOpen(open === 'learn' ? 'none' : 'learn')} className={`hover:text-white items-center relative group flex gap-1 ${selected === 'learn' ? 'text-white' : '' }`}>
                            learn
                            <span className="group-hover:-rotate-180 transition-all">
                                <DownArrow2 />
                            </span>
                        </li>
                        <div className={open === 'learn' ? 'ml-10 h-auto transition-all' : 'ml-10 overflow-hidden h-0 transition-all'}>
                            <ul className="[&>li>a]:transition-all">
                                <li className="hover:text-white">
                                    <a href="#">
                                        Read Docs
                                    </a>
                                </li>
                                <li className="hover:text-white">
                                    <a href="#">
                                        Solana Playground
                                    </a>
                                </li>
                                <li className="hover:text-white">
                                    <a href="#">
                                        Anchor Docs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <li onClick={() => setOpen(open === 'build' ? 'none' : 'build')} className={`hover:text-white relative items-center group flex gap-1 ${selected === 'build' ? 'text-white' : '' }`}>
                            build
                            <span className="group-hover:-rotate-180 transition-all">
                                <DownArrow2 />
                            </span>
                        </li>
                        <div className={open === 'build' ? 'ml-10 h-auto transition-all' : 'ml-10 overflow-hidden h-0 transition-all'}>
                            <ul className="[&>li>a]:transition-all">
                                <li className="hover:text-white">
                                    <a href="/get-started">
                                        Get Started
                                    </a>
                                </li>
                                <li className="hover:text-white">
                                    <a href="#">
                                        Create Solana App
                                    </a>
                                </li>
                                <li className="hover:text-white">
                                    <a href="#">
                                        Metaplex Docs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <li onClick={() => setOpen(open === 'network' ? 'none' : 'network')} className={`hover:text-white relative items-center group flex gap-1 ${selected === 'network' ? 'text-white' : '' }`}>
                            network
                            <span className="group-hover:-rotate-180 transition-all">
                                <DownArrow2 />
                            </span>
                        </li>
                        <div className={open === 'network' ? 'ml-10 h-auto transition-all' : 'ml-10 overflow-hidden h-0 transition-all'}>
                            <ul className="[&>li>a]:transition-all">
                                <li className="hover:text-white">
                                    <a href="#">
                                        Scaffold Series
                                    </a>
                                </li>
                                <li className="hover:text-white">
                                    <a href="#">
                                        Solana Library Series
                                    </a>
                                </li>
                                <li className="hover:text-white">
                                    <a href="#">
                                        Cookbook
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <li onClick={() => setOpen(open === 'community' ? 'none' : 'community')} className={`hover:text-white relative items-center group flex gap-1 ${selected === 'community' ? 'text-white' : '' }`}>
                            community
                            <span className="group-hover:-rotate-180 transition-all">
                                <DownArrow2 />
                            </span>
                        </li>
                        <div className={open === 'community' ? 'ml-10 h-auto transition-all' : 'ml-10 overflow-hidden h-0 transition-all'}>
                            <ul className="[&>li>a]:transition-all">
                                <li className="hover:text-white">
                                    <a href="#">
                                        NTFs
                                    </a>
                                </li>
                                <li className="hover:text-white">
                                    <a href="#">
                                        Solana Gaming
                                    </a>
                                </li>
                                <li className="hover:text-white">
                                    <a href="#">
                                        DAOs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}