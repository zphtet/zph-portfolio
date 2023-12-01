import Image from "next/image";
import ThemeSwitcher from "./theme-switcher";
import MobileNav from "./mobile-nav";
import NavLinks from "./nav-links";

const Navbar = () => {
  return (
    <header className="max-w-7xl mx-auto  p-5 flex items-center justify-between">
      <div className="w-[40px] h-[40px] rounded-full  overflow-hidden">
        <Image
          src={"/assets/my.png"}
          alt="my pic"
          width={40}
          height={40}
          className=" object-cover grayscale cursor-pointer"
        />
      </div>
      <nav className="flex items-center gap-5">
        <div className="block sm:hidden">
          <MobileNav />
        </div>

        <div className="sm:block hidden">
          <NavLinks />
        </div>
        <div className="sm:block hidden">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
