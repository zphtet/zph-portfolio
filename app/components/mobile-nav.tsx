import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./nav-links";
import ThemeSwitcher from "./theme-switcher";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent side={"left"} className=" border-none ">
        <div className=" w-full h-full grid place-items-center ">
          <div className="flex flex-col gap-5">
            <NavLinks />
            <ThemeSwitcher />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
