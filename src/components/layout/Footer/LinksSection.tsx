import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "company",
    children: [
      { id: 11, label: "about", url: "#" },
      { id: 12, label: "features", url: "#" },
      { id: 13, label: "works", url: "#" },
      { id: 14, label: "career", url: "#" },
    ],
  },
  {
    id: 2,
    title: "help",
    children: [
      { id: 21, label: "customer support", url: "#" },
      { id: 22, label: "delivery details", url: "#" },
      { id: 23, label: "terms & conditions", url: "#" },
      { id: 24, label: "privacy policy", url: "#" },
    ],
  },
  {
    id: 3,
    title: "faq",
    children: [
      { id: 31, label: "account", url: "#" },
      { id: 32, label: "manage deliveries", url: "#" },
      { id: 33, label: "orders", url: "#" },
      { id: 34, label: "payments", url: "#" },
    ],
  },
  {
    id: 4,
    title: "resources",
    children: [
      { id: 41, label: "Free eBooks", url: "#" },
      { id: 42, label: "development tutorial", url: "#" },
      { id: 43, label: "How to - Blog", url: "#" },
      { id: 44, label: "youtube playlist", url: "#" },
    ],
  },
];

const LinksSection = () => (
  <>
    {footerLinksData.map(({ id, title, children }) => (
      <section className="flex flex-col mt-5" key={id}>
        <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
          {title}
        </h3>
        {children.map(({ id, label, url }) => (
          <Link
            href={url}
            key={id}
            className={`text-black/60 text-sm md:text-base mb-4 w-fit ${
              id !== 41 && id !== 43 ? "capitalize" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </section>
    ))}
  </>
);

export default LinksSection;

