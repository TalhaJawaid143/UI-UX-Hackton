"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
  children: React.ReactNode;
};

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ orientation = "horizontal", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          orientation === "horizontal" ? "flex-row" : "flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex", className)}
      {...props}
    >
      {children}
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("min-w-full flex-shrink-0", className)}
      {...props}
    >
      {children}
    </div>
  );
});
CarouselItem.displayName = "CarouselItem";

export { Carousel, CarouselContent, CarouselItem };
