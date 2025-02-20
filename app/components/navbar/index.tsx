'use client'

import Link from "next/link"
import { useState } from "react"

import "./navbar.styles.scss";
import ArrowCap from "../icons/arrow-cap";
import LinkButton from "../link-button";

interface NavLinkItem {
    title: string,
    link?: string,
    subItems?: NavLinkItem[] | undefined
}

const navLinks: NavLinkItem[] = [
   { 
        title: "Products",
        subItems: [
            { title: "Product 1", link: '#' },
            { title: "Product 2", link: "#" },
            { title: "Product 3", link: "#" },
        ]
   },
   {
        title: "Solutions",
        subItems: [
            { title: "Solution 1", link: "#" },
            { title: "Solution 2", link: "#" },
            { title: "Solution 3", link: "#" },
        ]
   },
   {
        title: "Resources",
        subItems: [
            { title: "Resource 1", link: "#" },
            { title: "Resource 2", link: "#" },
            { title: "Resource 3", link: "#" },
            { title: "Resource 4", link: "#" },
            { title: "Resource 5", link: "#" },
        ]
   },
   {
        title: "Enterprices",
        link: "#",
   },
   {
        title: "Pricing",
        link: "#"
   }
]

function Logo() {
    return (
        <Link href="/" className="block min-w-24">
            <img src="logos/logo.svg" alt="miro"/>
        </Link>
    )
}

function SubLinkNavItem({ item, onSubItemClick, className }: { item: NavLinkItem, onSubItemClick?: () => void | undefined, className?: string | undefined }): React.ReactNode {
    return (
        <li key={item.title} className={(item.subItems ? "multi-link" : "") + " " + className || ""}>
            {!item.subItems && <Link href={item.link || "#"}>{item.title}</Link>}
            {item.subItems && (
                <span onClick={onSubItemClick}>
                    {item.title}
                    <ArrowCap />
                </span>   
            )}

            {item.subItems && (
                <ul className="sub-links">
                    {item.subItems.map((subItem) => (
                        <li key={subItem.title}>
                            <Link href={subItem.link || "#"}>{subItem.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}

function MenuButton({ opened, onClick, className }: { opened?: boolean, onClick?: () => void, className?: string }) {
    return (
        <button type="button" title="menu-btn" className={"menu-btn " + className} onClick={onClick} >
            {!opened && <img src="icons/menu.svg" alt="menu" className="w-8 h-8"/>}
            {opened && <ArrowCap className="scale-[2] rotate-90 stroke-secondary"/>}
        </button>
    )
}

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav id="navbar">
            <MobileNavMenu opened={showMenu} onClosed={() => setShowMenu(false)}/>
            <div className="nav-container">
                <MenuButton opened={false} onClick={() => setShowMenu(true)} className="flex lg:hidden"/>
                <Logo />
                <ul className="nav-links">
                    {navLinks.map((item) => (
                        <SubLinkNavItem key={item.title} item={item}/>
                    ))}
                    <li className="more-links">
                        <span>
                            More
                            <ArrowCap />
                        </span>  
                        <ul className="sub-menu">
                            {navLinks.map((item: NavLinkItem) => {
                                return (item.subItems && <SubLinkNavItem key={item.title} item={item} />)
                            })}
                        </ul>
                    </li>
                </ul>

                <span className="hidden sm:block flex-1"></span>
                <span className="block sm:hidden menu-btn"></span>
                
                <ul className="lg utility-links">
                    <li>
                        <Link href="#" className="nav-link flex flex-row items-center gap-1">
                            <img src="icons/glob.svg" alt="lang" className="w-6 h-6"/>
                            EN
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Contact Sales    
                        </Link>
                    </li>
                </ul>

                <div className="reg-btn">
                    <Link href="">
                        Login
                    </Link>
                    <LinkButton href="#">Sign Up Free</LinkButton>
                </div>
            </div>
        </nav>
    )
}

function MobileNavMenu({ opened, onClosed }: { opened: boolean, onClosed: () => void }) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const toggleSubMenu = (menu: string) => {
        if (activeMenu == menu) setActiveMenu(null);
        else setActiveMenu(menu);
    }

    return (
        <>
            <span className={"mobile-nav-bar-overlay " + (opened ? "opened" : "")} onClick={onClosed}></span>
            <div className={"mobile-nav-bar " + (opened ? "opened" : "")}>
                <div className="mobile-header">
                    <MenuButton opened={true} onClick={onClosed} className="flex"/>
                    <Logo />
                </div>

                <ul className="nav-links">
                    {navLinks.map((item) => (
                        <SubLinkNavItem key={item.title} item={item} onSubItemClick={() => {toggleSubMenu(item.title)}} className={activeMenu == item.title ? "opened" : ""}/>
                    ))}
                </ul>

                <div className="action-wrapper">
                    <div className="reg-btn">
                        <LinkButton href="#" variant="outlined">
                            LogIn
                        </LinkButton>
                        <LinkButton href="#">
                            Sign Up Free
                        </LinkButton>
                    </div>
                    <ul className="utility-links">
                        <li>
                            <Link href="#" className="nav-link flex flex-row items-center gap-1">
                                <img src="icons/glob.svg" alt="lang" className="w-6 h-6"/>
                                EN
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Contact Sales    
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}