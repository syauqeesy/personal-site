import DropdownButton from "./navbar/DropDownButton";
import NavbarItem from "./navbar/Item";

function Header() {
  return (
    <header className="p-2.5 md:px-20 bg-black">
      <ul className="flex justify-between">
        <NavbarItem className="font-bold" children="Ahmad Syauqi" />

        <div className="hidden md:flex">
          <NavbarItem className="ml-10" children="experience." />
          <NavbarItem className="ml-10" children="work." />
          <NavbarItem className="ml-10" children="contact." />
        </div>

        <div className="flex flex-col justify-center md:hidden">
          <NavbarItem>
            <DropdownButton />
          </NavbarItem>
        </div>
      </ul>
    </header>
  );
}

export default Header;
