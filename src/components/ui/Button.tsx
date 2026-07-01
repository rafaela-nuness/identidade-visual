import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-7 py-3",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-fg text-bg hover:bg-accent/90 rounded-none shadow-sm active:scale-[0.98]",
    secondary: "border border-border-custom bg-transparent text-fg hover:bg-fg hover:text-bg rounded-none active:scale-[0.98]",
    link: "px-0 py-0 text-fg relative overflow-hidden group-hover:text-accent after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
  };

  // Adjust size padding for link style to be zero
  const finalSizeClass = variant === "link" ? "" : sizeClasses[size];
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${finalSizeClass} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
