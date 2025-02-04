'use client'

import { useState } from "react"
import Chips from "../chips"
import Link from "next/link"

interface WorkTabsProps {
    className?: string,
    data: { title:string, desc:string, img:string, link:string }[]
}

export default function WorkTabs({ data } : WorkTabsProps) {
    const [activeTab, setActiveTab] = useState(0)
    const activeData = data[activeTab]
    return (
        <div className="
            w-full flex flex-col flex-justify-stretch gap-8
        ">
            <Chips selectedIndex={activeTab} chips={data.map((tab) => tab.title)} onSelected={(index) => setActiveTab(index)} />

            <div key={activeTab} className="
                flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-16
                w-full max-w-7xl
                py-2 md:py-8
                animate-fade-down
            ">
                <div className="
                    flex flex-col gap-8
                    w-full max-w-md md:max-w-sm
                ">
                    <h3>{activeData.title}</h3>
                    <p>{activeData.desc}</p>
                    <Link href={activeData.link} className="flex flex-row gap-4 items-center">
                        Learn More
                        <img src="icons/arrow.svg" alt="" />
                    </Link>
                </div>
                <div className="
                    flex flex-1 flex-col justify-center items-center gap-2
                ">
                    <img src={activeData.img} alt="" className="w-full"/>
                </div>
            </div>
        </div>
    )
}