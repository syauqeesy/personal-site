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

        <div className="block md:hidden">
          <li className="d-block text-white ml-10 cursor-pointer">
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </li>
        </div>
      </ul>
    </header>
  );
}

export default Header;
