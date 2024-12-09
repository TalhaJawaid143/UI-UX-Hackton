import Link from "next/link";
import React from "react";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  {
    title: "T-shirts",
    slug: "/shop?category=t-shirts",
  },
  {
    title: "Shorts",
    slug: "/shop?category=shorts",
  },
  {
    title: "Shirts",
    slug: "/shop?category=shirts",
  },
  {
    title: "Hoodie",
    slug: "/shop?category=hoodie",
  },
  {
    title: "Jeans",
    slug: "/shop?category=jeans",
  },
];

const CategoriesSection = () => {
  return (
    <section>
      <h2 className="text-black font-bold text-xl mb-2">Categories</h2>
      <ul className="flex flex-col space-y-2">
        {categoriesData.map((category, idx) => (
          <li key={idx}>
            <Link href={category.slug} className="text-black/60 hover:underline">
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoriesSection;

