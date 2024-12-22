import React, { JSX } from "react";
import Title from "./Title";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: JSX.Element;
  smallTitle?: string;
}

const Heading = ({ className, title, subtitle, icon, smallTitle }: Props) => {
  return (
    <div
      className={cn(
        "max-w-2xl mx-auto flex flex-col gap-2 items-center justify-between text-center",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl md:text-2xl text-lightSky">{icon}</span>
        <h1 className="text-base md:text-xl font-semibold text-orange-500/85">
          {smallTitle}
        </h1>
      </div>
      <Title className="md:text-4xl tracking-wide">{title}</Title>
      <p className="text-sm md:text-base tracking-wide text-gray-800">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
