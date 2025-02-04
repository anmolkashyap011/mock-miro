'use client';

interface ChipsProps {
    chips: string[],
    selectedIndex: number,
    onSelected: (index: number) => void,
}

export default function Chips({ selectedIndex, chips, onSelected, ...props }: ChipsProps) {
    return (
        <div className="
            flex flex-row items-center justify-start gap-2 flex-wrap
            py-2
        ">
            {chips.map((chip, index) => (
                <button key={index} onClick={() => { onSelected(index) }} type="button" title={chip} className={`
                    flex justify-center items-center 
                    px-6 py-1
                    text-label-s text-secondary
                    border border-surface rounded-full
                    ${ index == selectedIndex ? "bg-surface" : "bg-transparent" }
                `}>
                    {chip}
                </button>
            ))}
        </div>   
    )
}