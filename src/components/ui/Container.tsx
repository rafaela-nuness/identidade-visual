import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function Container({
  children,
  as: Component = "div",
  className = "",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[var(--max-width)] px-6 md:px-12 lg:px-16 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
