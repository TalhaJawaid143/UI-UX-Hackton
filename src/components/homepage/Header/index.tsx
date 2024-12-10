import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const stats = [
    { count: 200, label: "International Brands" },
    { count: 2000, label: "High-Quality Products" },
    { count: 3000, label: "Happy Customers" },
  ];

  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Text Section */}
        <section className="max-w-frame px-4">
          <motion.h2
            initial={{ y: 100, opacity: 0, rotate: 10 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 font-bold"
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]"
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              href="/shop"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse"
            >
              Shop Now
            </Link>
          </motion.div>
          {/* Statistics Section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 md:mb-[116px]"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col text-center md:text-left">
                <span className="font-bold text-2xl lg:text-3xl xl:text-[40px]">
                  <AnimatedCounter from={0} to={stat.count} />+
                </span>
                <span className="text-xs xl:text-base text-black/60">
                  {stat.label}
                </span>
                {index < stats.length - 1 && (
                  <Separator
                    className="hidden md:block h-12 bg-black/10"
                    orientation="vertical"
                  />
                )}
              </div>
            ))}
          </motion.div>
        </section>

        {/* Image Section */}
        <motion.section
          initial={{ y: 100, opacity: 0, rotate: 10 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="relative bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat min-h-[448px] md:min-h-[428px] bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]"
        >
          <Image
            priority
            src="/icons/big-star.svg"
            height={104}
            width={104}
            alt="Big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] lg:max-w-24 xl:max-w-[104px] animate-spin"
          />
          <Image
            priority
            src="/icons/small-star.svg"
            height={56}
            width={56}
            alt="Small star"
            className="absolute left-7 top-36 md:top-44 lg:top-56 max-w-11 md:max-w-14 animate-spin"
          />
        </motion.section>
      </div>
    </header>
  );
};

export default Header;
