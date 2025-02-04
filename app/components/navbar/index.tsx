'use client'

import Link from "next/link"
import { useState } from "react"

import "./navbar.styles.scss";
import Button from "../button";

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav id="navbar" className="
            fixed
            w-full top-0
            bg-neutral-light
            border-b border-surface-variant
            z-50
        ">
            {/* Mobile NavBar */}
            <div className={`
                fixed
                block md:hidden 
                transform top-0 w-full h-full
                transition duration-300
                ${showMenu ? "left-0" : "-left-full"}

                bg-neutral-light
                z-index-50
            `}>
                <MobileNavBar onClosed={() => setShowMenu(false)} />
            </div>

            {/* Desktop NavBar */}
            <div className="
                flex flex-row justify-between sm:justify-start items-center gap-6
                h-16 w-full
                px-4 md:px-8
            ">
                <button type="button" title="menu-btn" className="
                    flex lg:hidden justify-center items-center aspect-square h-full
                " onClick={() => setShowMenu(true)}>
                    <img src="icons/menu.svg" alt="menu" className="w-8 h-8"/>
                </button>

                <Link href="/" className="block min-w-24">
                    <img src="logos/logo.svg" alt="miro"/>
                </Link>

                <span className="h-full aspect-square block sm:hidden"></span>

                <ul className="nav-links hidden lg:flex">
                    <li className="hidden xl:flex">
                        <div className="nav-link">
                            <span>Products</span>
                            <img src="icons/arrow-cap.svg" alt=""/>

                            <ul className="sub-menu">
                                <li>
                                    <Link href="#">
                                        Sub Link 1
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Sub Link 2
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Sub Link 3
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="hidden xl:flex">
                        <div className="nav-link">
                            <span>Solutions</span>
                            <img src="icons/arrow-cap.svg" alt=""/>

                            <ul className="sub-menu">
                                <li>
                                    <Link href="#">
                                        Sub Link 1
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Sub Link 2
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Sub Link 3
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="hidden xl:flex">
                        <div className="nav-link">
                            <span>Resources</span>
                            <img src="icons/arrow-cap.svg" alt=""/>

                            <ul className="sub-menu">
                                <li>
                                    <Link href="#">
                                        Sub Link 1
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Sub Link 2
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Sub Link 3
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="#" className="nav-link">
                            Enterprises
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="nav-link">
                            Pricing
                        </Link>
                    </li>

                    <li id="medium-sub-nav-parent" className="block xl:hidden">
                        <div className="nav-link">
                            <span>More</span>
                            <img src="icons/arrow-cap.svg" alt=""/>

                            <MediumSubNavBar />
                        </div>
                    </li>
                </ul>

                <span className="flex-1 hidden sm:block"></span>

                <ul className="nav-links hidden md:flex">
                    <li>
                        <Link href="#" className="nav-link flex flex-row gap-1">
                            <img src="icons/glob.svg" alt="lang" />
                            EN
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="nav-link">
                            Contact Sales    
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="nav-link">
                            Login    
                        </Link>
                    </li>
                </ul>
                <Button variant="filled" className="hidden sm:block"> 
                    <div className="flex flex-row items-center gap-2">
                        Sign Up Free
                        <img src="icons/arrow.svg" alt="" className="w-5 h-5" />
                    </div>
                </Button>
            </div>

            {/* Medium NavBar */}
            <div>

            </div>
        </nav>
    )
}

function MediumSubNavBar() {
    return (
        <ul id="medium-sub-nav" className="
            absolute
        ">
            <li>
                <div>
                    <h3>Products</h3>
                    <ul>
                        <li>
                            <Link href="#">Product 1</Link>
                        </li>
                        <li>
                            <Link href="#">Product 2</Link>
                        </li>
                        <li>
                            <Link href="#">Product 3</Link>
                        </li>
                    </ul>
                </div>
            </li>

            <li>
                <div>
                    <h3>Solutions</h3>
                    <ul>
                        <li>
                            <Link href="#">Solution 1</Link>
                        </li>
                        <li>
                            <Link href="#">Solution 2</Link>
                        </li>
                        <li>
                            <Link href="#">Solution 3</Link>
                        </li>
                    </ul>
                </div>
            </li>

            <li>
                <div>
                    <h3>Resources</h3>
                    <ul>
                        <li>
                            <Link href="#">Resource 3</Link>
                        </li>
                        <li>
                            <Link href="#">Resource 3</Link>
                        </li>
                        <li>
                            <Link href="#">Resource 3</Link>
                        </li>
                        <li>
                            <Link href="#">Resource 4</Link>
                        </li>
                        <li>
                            <Link href="#">Resource 5</Link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}

interface MobileNavBarProps {
    onClosed: () => void | undefined
}

function MobileNavBar({ onClosed = () => { } }: MobileNavBarProps) {
    const [activeMenu, setActiveMenu] = useState(0);

    const toggleSubMenu = (index: number) => {
        if (activeMenu == index) setActiveMenu(0);
        else setActiveMenu(index);
    }

    return (
        <div id="mobile-nav">
            <div className="
                header
                flex flex-row items-center gap-6
                h-16 w-full
                px-4 md:px-8
            ">
                <button type="button" title="menu-btn" className="
                    flex lg:hidden justify-center items-center aspect-square h-full
                " onClick={onClosed}>
                    <img src="icons/menu.svg" alt="menu" className="w-8 h-8"/>
                </button>
                <Link href="/" className="block min-w-24 mx-auto">
                    <img src="logos/logo.svg" alt="miro"/>
                </Link>
                <span className="h-full aspect-square"></span>
            </div>

            <div className="mobile-nav-links">
                <div className={activeMenu == 1 ? "active" : ""}>
                    <button type="button" title="Products" onClick={() => toggleSubMenu(1)}>
                        <div>
                            <span>Products</span>
                            <img src="icons/arrow-cap.svg" alt=""/>
                        </div>
                    </button>
                    <ul>
                        <li>
                            <Link href="#">Product 1</Link>
                        </li>
                        <li>
                            <Link href="#">Product 2</Link>
                        </li>
                        <li>
                            <Link href="#">Product 3</Link>
                        </li>
                    </ul>
                </div>

                <div className={activeMenu == 2 ? "active" : ""}>
                    <button type="button" title="Solutions" onClick={() => toggleSubMenu(2)}>
                        <div>
                            <span>Solutions</span>
                            <img src="icons/arrow-cap.svg" alt=""/>
                        </div>
                    </button>
                    <ul>
                        <li>
                            <Link href="#">Solution 1</Link>
                        </li>
                        <li>
                            <Link href="#">Solution 2</Link>
                        </li>
                        <li>
                            <Link href="#">Solution 3</Link>
                        </li>
                    </ul>
                </div>

                <div className={activeMenu == 3 ? "active" : ""}>
                    <button type="button" title="Resources" onClick={() => toggleSubMenu(3)}>
                        <div>
                            <span>Resources</span>
                            <img src="icons/arrow-cap.svg" alt=""/>
                        </div>
                    </button>
                    <ul>
                        <li>
                            <Link href="#">Resource 1</Link>
                        </li>
                        <li>
                            <Link href="#">Resource 2</Link>
                        </li>
                        <li>
                            <Link href="#">Resource 3</Link>
                        </li>
                        <li>
                            <Link href="#">Resource 3</Link>
                        </li>
                        <li>
                            <Link href="#">Resource 3</Link>
                        </li>
                        <li>
                            <Link href="#">Resource 3</Link>
                        </li>
                    </ul>
                </div>

                <Link href="#">Enterprises</Link>
                <Link href="#">Pricing</Link>
            </div>

            <div className="
                w-full
                flex flex-col gap-4
                p-4
            ">
                <div className="
                    flex flex-col justify-stretch gap-2
                ">
                    <Button variant="outlined" className="block"> 
                        <div className="flex flex-row justify-center items-center gap-2">
                            Log In
                            <img src="icons/arrow.svg" alt="" className="w-5 h-5" />
                        </div>
                    </Button>
                    <Button variant="filled" className="block"> 
                        <div className="flex flex-row justify-center items-center gap-2">
                            Sign Up Free
                            <img src="icons/arrow.svg" alt="" className="w-5 h-5" />
                        </div>
                    </Button>
                </div>
                <ul className="
                    flex flex-row items-center justify-center gap-4
                    h-auto w-full
                ">
                    <li>
                        <Link href="#" className="nav-link flex flex-row gap-1">
                            <img src="icons/glob.svg" alt="lang" />
                            EN
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="nav-link w-auto">
                            Contact Sales    
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}