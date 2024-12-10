"use client";

import React, { useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
};

const AnimatedCounter = ({ to }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  return <span ref={ref}>{to.toLocaleString()}</span>;
};

export default AnimatedCounter;

