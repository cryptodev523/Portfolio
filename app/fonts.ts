import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const ndotFont = localFont({
  src: "./ndot45.otf",
  display: "swap",
});
