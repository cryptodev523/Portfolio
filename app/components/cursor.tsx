"use client";

import { useEffect, useRef } from "react";

export const CursorEffect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: { pageX: number; pageY: number }) => {
    ref.current?.style.setProperty(
      "background",
      `radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(29,78,216,0.15), transparent 80%)`
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute bg-white"
    ></div>
  );
};
