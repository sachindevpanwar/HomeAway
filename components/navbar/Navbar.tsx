import NavSearch from "./NavSearch";
import Logo from "./Logo";
import LinksDropDawn from "./LinksDropDawn";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:item-center flex-wrep gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <DarkMode />
          <LinksDropDawn />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
