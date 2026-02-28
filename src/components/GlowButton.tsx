import React from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-primary-foreground cursor-pointer",
                    "bg-primary shadow-[0_0_15px_3px_rgba(250,204,21,0.3)]",
                    "transition-all duration-300 ease-out",
                    "hover:scale-[1.03] hover:shadow-[0_0_30px_8px_rgba(250,204,21,0.5)] active:scale-[0.97]",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    className
                )}
                {...props}
            >
                <span className="relative z-10">{children}</span>
                <div className="absolute inset-0 z-0 scale-x-[1.05] scale-y-[1.1] rounded-full bg-primary/20 blur-md transition-all duration-500 group-hover:bg-primary/40 animate-pulse" style={{ animationDuration: '3s' }} />
            </button>
        );
    }
);

GlowButton.displayName = "GlowButton";
