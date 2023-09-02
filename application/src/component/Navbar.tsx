import NavbarDropdownButton from "./navbar/DropdownButton";
import NavbarItem from "./navbar/Item";

function Navbar() {
  return (
    <nav className="navbar p-2.5 lg:py-6 lg:px-20 bg-black">
      <ul className="flex justify-between">
        <NavbarItem className="font-bold" children="Ahmad Syauqi" />

        <div className="hidden lg:flex">
          <NavbarItem className="ml-10" children="experience." />
          <NavbarItem className="ml-10" children="work." />
          <NavbarItem className="ml-10" children="contact." />
        </div>

        <div className="flex flex-col justify-center lg:hidden">
          <NavbarItem>
            <NavbarDropdownButton />
          </NavbarItem>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
