"use client";

import React, { useState } from "react";

const ColorsSection = () => {
  const [selected, setSelected] = useState<string>("bg-green-600");

  return (
    <section>
      <h2 className="text-black font-bold text-xl mb-2">Colors</h2>
      <div className="flex flex-wrap gap-2">
        {[
          "bg-green-600",
          "bg-red-600",
          "bg-yellow-300",
          "bg-orange-600",
          "bg-cyan-400",
          "bg-blue-600",
          "bg-purple-600",
          "bg-pink-600",
          "bg-white",
          "bg-black",
        ].map((color, index) => (
          <button
            key={index}
            type="button"
            className={`${color} rounded-full w-10 h-10 flex items-center justify-center border border-black/20`}
          >
            {selected === color && (
              <span className="text-white text-sm font-bold">&#10003;</span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ColorsSection;

