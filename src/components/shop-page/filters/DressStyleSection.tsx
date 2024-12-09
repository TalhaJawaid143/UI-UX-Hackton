import React from "react";
import Link from "next/link";

type DressStyle = {
  title: string;
  slug: string;
};

const dressStylesData: DressStyle[] = [
  {
    title: "Casual",
    slug: "/shop?style=casual",
  },
  {
    title: "Formal",
    slug: "/shop?style=formal",
  },
  {
    title: "Party",
    slug: "/shop?style=party",
  },
  {
    title: "Gym",
    slug: "/shop?style=gym",
  },
];

const DressStyleSection = () => {
  return (
    <section>
      <h2 className="text-black font-bold text-xl mb-2">Dress Style</h2>
      <ul className="flex flex-col space-y-2">
        {dressStylesData.map((dStyle, idx) => (
          <li key={idx} className="text-black/60">
            <Link href={dStyle.slug} className="hover:underline">
              {dStyle.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DressStyleSection;
