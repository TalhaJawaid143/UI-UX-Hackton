"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ReviewCard from "@/components/common/ReviewCard";
import { Review } from "@/types/review.types";

type ReviewsProps = { data: Review[] };

const Reviews = ({ data }: ReviewsProps) => {
  return (
    <section className="overflow-hidden">
      <div>
        <div className="relative w-full mb-6 md:mb-9">
          {/* Header */}
          <div className="relative flex items-end sm:items-center max-w-frame mx-auto mb-6 md:mb-10 px-4 xl:px-0">
            <h2
              className={cn([
                integralCF.className,
                "text-[32px] leading-[36px] md:text-5xl capitalize mr-auto",
              ])}
            >
              OUR HAPPY CUSTOMERS
            </h2>
            <div className="flex items-center space-x-1 ml-2">
              <button
                className="text-2xl border rounded-md p-2 hover:bg-gray-200"
                aria-label="Previous Slide"
              >
                <FaArrowLeft />
              </button>
              <button
                className="text-2xl border rounded-md p-2 hover:bg-gray-200"
                aria-label="Next Slide"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Carousel Content */}
          <div className="flex overflow-x-auto snap-x snap-mandatory">
            {data.map((review) => (
              <div
                key={review.id}
                className="w-full max-w-[358px] sm:max-w-[400px] snap-start pl-5"
              >
                <ReviewCard className="h-full" data={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

