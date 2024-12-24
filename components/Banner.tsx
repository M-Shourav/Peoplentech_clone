import React from "react";
import Container from "./Container";
import { cn } from "@/lib/utils";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const Banner = ({ className, children }: Props) => {
  return (
    <div className={cn("w-full h-full bg-black text-white", className)}>
      <Container className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {children}
      </Container>
    </div>
  );
};

export default Banner;
