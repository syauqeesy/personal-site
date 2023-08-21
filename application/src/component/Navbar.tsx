import NavbarDropdownButton from "./navbar/DropDownButton";
import NavbarItem from "./navbar/Item";

function Navbar() {
  return (
    <nav className="navbar p-2.5 md:py-6 md:px-20 bg-black">
      <ul className="flex justify-between">
        <NavbarItem className="font-bold" children="Ahmad Syauqi" />

        <div className="hidden md:flex">
          <NavbarItem className="ml-10" children="experience." />
          <NavbarItem className="ml-10" children="work." />
          <NavbarItem className="ml-10" children="contact." />
        </div>

        <div className="flex flex-col justify-center md:hidden">
          <NavbarItem>
            <NavbarDropdownButton />
          </NavbarItem>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
