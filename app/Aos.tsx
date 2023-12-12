"use client";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";
const AosProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 200,
    });
  }, []);
  return <>{children}</>;
};

export default AosProvider;
