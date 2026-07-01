import React from "react";
import Container from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
  useContainer?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
}

export default function Section({
  children,
  id,
  useContainer = true,
  borderTop = false,
  borderBottom = false,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        py-20 md:py-28 lg:py-36
        ${borderTop ? "border-t border-border-custom" : ""}
        ${borderBottom ? "border-b border-border-custom" : ""}
        ${className}
      `}
      {...props}
    >
      {useContainer ? (
        <Container>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
