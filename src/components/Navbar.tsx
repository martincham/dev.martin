const Navbar = () => {
  return (
    <nav
      style={{ fontSize: "min(1rem, 5vw)" }}
      className="font-medium z-50 sticky top-0  hover:border-secondary-foreground hover:backdrop-blur-lg backdrop-blur-md bg-background  min-w-full"
    >
      <ul className="flex flex-wrap justify-around p-2  text-foreground transition-colors duration-200">
        <li className=" text-center hover:translate-y-[1px] duration-150">
          <a
            href="#hero"
            className="block py-2 px-1 sm:px-4 hover:text-muted-foreground rounded-lg "
          >
            Home
          </a>
        </li>
        <li className=" text-center hover:translate-y-[1px] duration-150">
          <a
            href="#about"
            className="block py-2 px-1 sm:px-4 hover:text-muted-foreground rounded-lg md:py-3 lg:py-4"
          >
            About
          </a>
        </li>
        <li className=" text-center hover:translate-y-[1px] duration-150">
          <a
            href="#projects"
            className="block py-2 px-1 sm:px-4 hover:text-muted-foreground rounded-lg md:py-3 lg:py-4"
          >
            Projects
          </a>
        </li>
        <li className=" text-center hover:translate-y-[1px] duration-150">
          <a
            href="#skills"
            className="block py-2 px-1 sm:px-4 hover:text-muted-foreground rounded-lg md:py-3 lg:py-4"
          >
            Skills
          </a>
        </li>
        <li className=" text-center hover:translate-y-[1px] duration-150">
          <a
            href="#contact"
            className="block py-2 px-1 sm:px-4 hover:text-muted-foreground rounded-lg md:py-3 lg:py-4"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
