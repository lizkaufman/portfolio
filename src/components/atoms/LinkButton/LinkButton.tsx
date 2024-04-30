import React, { ReactNode } from "react";

export type ButtonProps = {
  href: string;
  children: ReactNode;
};

export default function LinkButton({ children, href }: ButtonProps) {
  return (
    <a
      className="inline-flex items-center bg-codingbumblebee-blue hover:bg-codingbumblebee-green 
      text-codingbumblebee-dark-grey hover:motion-safe:animate-bounce cursor-pointer rounded-lg px-4 py-2 mt-4"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
