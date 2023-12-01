import NavLink from "./nav-link";

const NavLinks = () => {
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
    <div className=" flex  sm:flex-row flex-col   items-center gap-4 sm:gap-5">
      {navLinkData.map((navlink) => {
        return <NavLink key={navlink.label} {...navlink} />;
      })}
    </div>
  );
};

export default NavLinks;
