"use client";

import { usePathname } from "next/navigation";

const LayoutSpacing = () => 
  usePathname()?.includes("product") ? <div className="mb-20 md:mb-0" /> : null;

export default LayoutSpacing;

