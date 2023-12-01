"use client";

import Link from "next/link";
import { NavLinkType } from "../types";
import { usePathname } from "next/navigation";
const NavLink: React.FC<NavLinkType> = ({ label, pathname }) => {
  const curPathname = usePathname();
  const active = curPathname === pathname;
  const clickHandler = () => {
    document.getElementById("sheet-close")?.click();
  };
  return (
    <Link
      onClick={clickHandler}
      className={`text-xl  xsm:text-xl hover:text-primary ${
        active && "text-primary"
      }`}
      href={pathname}
    >
      {label}
    </Link>
  );
};

export default NavLink;
