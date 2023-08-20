function Header() {
  return (
    <header className="p-2.5 md:px-20 bg-black">
      <ul className="flex justify-between">
        <li className="block text-white font-bold cursor-pointer">
          Ahmad Syauqi
        </li>

        <div className="hidden md:flex">
          <li className="d-block text-white ml-10 cursor-pointer">
            experience.
          </li>
          <li className="d-block text-white ml-10 cursor-pointer">work.</li>
          <li className="d-block text-white ml-10 cursor-pointer">contact.</li>
        </div>
      </ul>
    </header>
  );
}

export default Header;
