import React from "react";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body-large"
  | "body"
  | "caption"
  | "meta";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: TypographyVariant;
  as?: React.ElementType;
}

const variantClasses: Record<TypographyVariant, string> = {
  display: "font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] font-normal",
  h1: "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-normal",
  h2: "font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug font-normal",
  h3: "font-sans text-lg sm:text-xl md:text-2xl font-medium tracking-tight leading-snug",
  "body-large": "font-sans text-lg sm:text-xl leading-relaxed font-light text-muted/90",
  body: "font-sans text-base leading-relaxed font-normal text-muted",
  caption: "font-sans text-sm leading-normal font-normal text-muted",
  meta: "font-mono text-xs tracking-widest uppercase font-medium text-muted/85",
};

export default function Typography({
  children,
  variant = "body",
  as,
  className = "",
  ...props
}: TypographyProps) {
  // Determine standard tags based on variants
  const defaultTagMap: Record<TypographyVariant, React.ElementType> = {
    display: "h1",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    "body-large": "p",
    body: "p",
    caption: "p",
    meta: "span",
  };

  const Component = as || defaultTagMap[variant];

  return (
    <Component
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
