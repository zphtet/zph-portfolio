"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const GlobalThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
