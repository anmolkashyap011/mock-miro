'use client';

import { useRef, useState, useEffect } from "react";

interface ChipsProps {
    chips: string[],
    selectedIndex: number,
    onSelected: (index: number) => void,
}

export default function Chips({ selectedIndex, chips, onSelected }: ChipsProps) {
    const repeater = Array.from({length: 2});

    const container = useRef<HTMLDivElement>(null);
    const [showLeft, setShowLeft] = useState(true);
    const [showRight, setShowRight] = useState(true);

    function toggleScrollButtons() {
        
        if (!container.current) {
            setShowLeft(false);
            setShowRight(false);
            return;
        }

        setShowLeft(container.current.scrollLeft > 0);
        setShowRight(container.current.scrollLeft < container.current.scrollWidth - container.current.clientWidth);
    }

    function scrollLeft() {

    }

    function scrollRight() {

    }

    useEffect(() => {
        toggleScrollButtons()
        window.addEventListener('resize', toggleScrollButtons);
        container.current?.addEventListener('scroll', toggleScrollButtons);
        return () => {
            window.removeEventListener('resize', toggleScrollButtons);
            container.current?.removeEventListener('scroll', toggleScrollButtons);
        }
    }, [container])

    return (
        <div className="
            relative
            flex justify-start items-center
            w-full
            py-2 px-1
            overflow-x-clip
        ">
            {repeater.map((_, i:number) => (
                <button title='scroll-btn' onClick={i == 0 ? scrollRight : scrollLeft} type='button' key={i} className={`
                    ${ i == 0 
                        ? showLeft ? 'opacity-100' : 'opacity-0 pointer-events-none' 
                        : showRight ? 'opacity-100' : 'opacity-0 ppinter-events-none' 
                    }

                    hidden md:block
                    absolute
                    h-full
                    aspect-square

                    bg-neutral-light
                    border border-neutral-mid rounded-full
                    ${i == 0 ? '[box-shadow:10px_0px_10px_0px_rgba(255,255,255,1)]' : '[box-shadow:-10px_0px_10px_0px_rgba(255,255,255,1)]'}
                    
                    ${i == 0 ? "left-0" : "right-0"}

                    z-10
                `}>
                    <img src="icons/arrow-cap.svg" alt="" className={`
                        w-full h-full ${i==0 ? 'rotate-90' : '-rotate-90'}
                    `}/>
                </button>
            ))}

            {repeater.map((_, i:number) => (
                <span className={`
                    block lg:hidden

                    ${ i == 0 
                        ? showLeft ? 'opacity-100' : 'opacity-0' 
                        : showRight ? 'opacity-100' : 'opacity-0' 
                    }

                    absolute
                    h-full w-12
                    z-10
                    ${i == 0 ? 'left-0' : 'right-0'}
                    bg-[linear-gradient(to_right,white,transparent)]
                    ${i == 0 ? '' : 'rotate-180'}

                    select-none
                    pointer-events-none

                    transition-opacity duration-300 ease-out
                `}></span>		
            ))}

            <div ref={container} className="
                relative
                flex flex-row items-center justify-start gap-2
                w-full

                overflow-x-auto
                hide-scrollbar

                snap-x snap-mandatory

                transition-transform duration-300
            ">
                {chips.map((chip, index) => (
                    <button key={index} onClick={() => { onSelected(index) }} type="button" title={chip} className={`
                        flex justify-center items-center 
                        px-6 py-1 
                        min-w-max
                        text-label-s text-secondary
                        border border-surface rounded-full
                        ${ index == selectedIndex ? "bg-surface" : "bg-transcontainer" }

                        snap-center
                    `}>
                        {chip}
                    </button>
                ))}
            </div>
        </div>   
    )
}