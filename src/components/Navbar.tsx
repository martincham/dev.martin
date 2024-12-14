const Navbar = () => {
  return (
    <nav
      style={{ fontSize: "min(1rem, 5vw)" }}
      className="font-medium z-50 sticky top-0 pb-1 backdrop-blur-md bg-background  min-w-full"
    >
      <ul className="flex flex-wrap justify-around   text-foreground transition-colors duration-200">
        {/* <li className=" text-center hover:translate-y-[1px] duration-150">
          <a
            href="#hero"
            className="block py-2 px-1 sm:px-4 hover:text-muted-foreground  "
          >
            Home
          </a>
        </li> */}
        <li className=" text-center hover:translate-y-[1px] duration-150">
          <a
            href="#about"
            className="block py-2 px-1 sm:px-4 hover:text-turq   "
          >
            About
          </a>
        </li>
        <li className=" text-center hover:translate-y-[1px] duration-150">
          <a
            href="#projects"
            className="block py-2 px-1 sm:px-4  hover:text-golden   "
          >
            Projects
          </a>
        </li>
        <li className=" text-center hover:translate-y-[1px] duration-150">
          <a
            href="#experience"
            className="block py-2 px-1 sm:px-4 hover:text-purp   "
          >
            Experience
          </a>
        </li>
        <li className=" text-center hover:translate-y-[1px] duration-150">
          <a
            href="#skills"
            className="block py-2 px-1 sm:px-4 hover:text-salmon   "
          >
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
