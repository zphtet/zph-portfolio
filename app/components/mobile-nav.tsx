import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>Open</button>
      </SheetTrigger>
      <SheetContent>
        <p> This will be nav items</p>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
