import React from "react";
import Link from "next/link";

const BreadcrumbCart = () => {
  return (
    <nav className="mb-2 sm:mb-6" aria-label="breadcrumb">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <span className="text-gray-500">/</span>
        <li className="text-gray-700 font-medium">Cart</li>
      </ol>
    </nav>
  );
};

export default BreadcrumbCart;
