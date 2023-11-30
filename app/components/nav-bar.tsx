import Image from "next/image";
import NavLink from "./nav-link";
import ThemeSwitcher from "./theme-switcher";

const Navbar = () => {
  const navLinkData = [
    {
      label: "Home",
      pathname: "/",
    },
    {
      label: "Projects",
      pathname: "/projects",
    },
  ];
  return (
    <header className="max-w-7xl mx-auto  p-5 flex items-center justify-between">
      <div>
        <Image
          src={"/user.jpg"}
          alt="my pic"
          width={35}
          height={35}
          className="rounded-full object-cover overflow-hidden"
        />
      </div>
      <nav className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          {navLinkData.map((navlink) => {
            return <NavLink key={navlink.label} {...navlink} />;
          })}
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
