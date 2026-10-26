"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Play } from "lucide-react";

export interface ParallaxProduct {
  title: string;
  category: string;
  thumbnail: string;
  isVideo?: boolean;
  onSelect: () => void;
}

// Aceternity-style Hero Parallax: three rows of cards slide in opposite
// directions and tilt flat as the section scrolls.
export const HeroParallax = ({
  products,
  header,
}: {
  products: ParallaxProduct[];
  header: React.ReactNode;
}) => {
  const perRow = Math.ceil(products.length / 3);
  const firstRow = products.slice(0, perRow);
  const secondRow = products.slice(perRow, perRow * 2);
  const thirdRow = products.slice(perRow * 2);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 900]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -900]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      id="home"
      className="hero-bg h-[280vh] md:h-[300vh] py-32 md:py-40 overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      {header}
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 md:space-x-16 mb-12 md:mb-20">
          {firstRow.map((p) => (
            <ProductCard product={p} translate={translateX} key={p.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 md:mb-20 space-x-8 md:space-x-16">
          {secondRow.map((p) => (
            <ProductCard product={p} translate={translateXReverse} key={p.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 md:space-x-16">
          {thirdRow.map((p) => (
            <ProductCard product={p} translate={translateX} key={p.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: ParallaxProduct;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.button
      type="button"
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      onClick={product.onSelect}
      aria-label={`Open ${product.title}`}
      className="group/product h-56 w-[17rem] sm:h-80 sm:w-[24rem] md:h-96 md:w-[30rem] relative shrink-0 rounded-2xl overflow-hidden text-left border border-white/20 bg-navy-950 shadow-glow"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="object-cover object-left-top absolute h-full w-full inset-0"
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent pointer-events-none transition-opacity" />
      {product.isVideo && (
        <span className="absolute top-3 right-3 grid place-items-center w-10 h-10 rounded-full bg-royal text-white shadow-glow">
          <Play size={16} className="fill-white ml-0.5" />
        </span>
      )}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/product:opacity-100 transition-opacity">
        <p className="text-xs font-semibold text-royal-soft">{product.category}</p>
        <h2 className="text-white font-bold text-lg">{product.title}</h2>
      </div>
    </motion.button>
  );
};
