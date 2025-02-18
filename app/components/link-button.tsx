import Link from "next/link";
import { cn } from "../utils/tailwind.util";
import { AnchorHTMLAttributes } from "react";
import Arrow from "./icons/arrow";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'filled' | "outlined",
    href: string,
}

export default function LinkButton({ variant = 'filled', className, ...props }: LinkButtonProps) {
    return (
        <Link href={props.href} className={cn(
            `
                flex justify-center items-center
                px-6 py-2
                rounded-full
                border border-primary
                transition

                no-underline
            `,
            {
                [`
                    bg-primary text-neutral-light fill-neutral-light 
                    hover:bg-secondary hover:text-neutral-light
                `] : variant == 'filled',
                [`
                    bg-transparent text-primary fill-primary
                    hover:bg-primary hover:text-neutral-light hover:fill-neutral-light
                `] : variant == 'outlined',
            },
            className
        )}>
            <div className="flex flex-row justify-center items-center gap-2">
                {props.children}
                <Arrow className="w-8 h-8"/>
            </div>
        </Link>
    )
}