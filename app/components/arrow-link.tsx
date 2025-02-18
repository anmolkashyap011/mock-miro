import Link from "next/link";
import Arrow from "./icons/arrow";
import { cn } from "../utils/tailwind.util";

interface ArrowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string,
    colors?: 'primary' | 'secondary' | 'dull'
}


export default function ArrowLink({colors = 'primary', ...props}: ArrowLinkProps) {
    const primaryStyles: string = `
        [&>span]text-primary fill-primary
        [&:hover>span]:text-secondary
        [&>span::after]:bg-primary
        
        [&:hover>svg]:translate-x-2
        [&:hover>svg]:fill-secondary
        
        [&:hover>span]:after:bg-secondary
        `
        const secondaryStyles: string = `
        [&>span]:text-secondary fill-secondary
        [&>span::after]:bg-secondary
        
        [&:hover>span]:text-primary
        [&:hover>svg]:fill-primary
        [&:hover>span]:after:bg-primary
        `
        const dullStyles: string = `
        [&>span]:text-neutral-mid fill-neutral-mid
        [&>span::after]:bg-neutral-mid

        [&:hover>span]:text-primary
        [&:hover>svg]:fill-primary
        [&:hover>span]:after:bg-primary
    `
    return (
        <Link href={props.href} className={cn(`
                flex flex-row gap-2 items-center
                no-underline
                w-fit
                overflow-x-clip
                transition

                [&:hover>svg]:translate-x-2
            `,
            {
                [primaryStyles] : colors == 'primary',
                [secondaryStyles] : colors == 'secondary',
                [dullStyles] : colors == 'dull'
            },
            props.className
        )}>
            <span className="
                relative

                after:content-['']
                after:absolute
                after:left-0
                after:bottom-0
                after:w-full
                after:h-px
            ">
                {props.children}
            </span>
            <Arrow className="w-8 h-8 transition-transform"/>
        </Link>
    )
}