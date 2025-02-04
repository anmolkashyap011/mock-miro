import { cn } from "../utils/tailwind.util";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'filled' | "outlined",
}

export default function Button({ variant = 'filled', className, ...props }: ButtonProps) {
    return (
        <button type="button" { ...props } className={cn(
            `
                flex justify-center items-center
                px-6 py-3
                rounded-full
                ${ 
                    variant == "filled" 
                    ? "bg-primary text-neutral-light" 
                    : "border border-primary text-primary" 
                }
            `,
            className
        )}></button>
    )
}