import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav-bar";
import GlobalThemeProvider from "./components/theme-provider";
import Footer from "./components/footer";
import AosProvider from "./Aos";
// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "my portfolio | web developer",
  description: "This is my personal portfolio build with next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}  text-gray-700 dark:text-gray-200  `}
      >
        <GlobalThemeProvider>
          <AosProvider>
            <Navbar />
            {children}
            <div className="py-5">
              <Footer />
            </div>
          </AosProvider>
        </GlobalThemeProvider>
      </body>
    </html>
  );
}
