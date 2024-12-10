"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  min: number;
  max: number;
  step?: number;
  defaultValue?: [number, number];
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  ({ className, min, max, step = 1, defaultValue = [min, max], ...props }, ref) => {
    return (
      <div className="w-full">
        <SliderPrimitive.Root
          ref={ref}
          className={cn("relative flex w-full items-center", className)}
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-1 w-full bg-gray-200 rounded-full">
            <SliderPrimitive.Range className="absolute h-full bg-black" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-black" />
          <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-black" />
        </SliderPrimitive.Root>
      </div>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
