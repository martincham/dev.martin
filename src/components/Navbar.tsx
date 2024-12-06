const Navbar = () => {
  return (
    <nav className="m-8 z-50 sticky top-2 border transition-all duration-300 hover:border-foreground hover:backdrop-blur-2xl backdrop-blur-md rounded-full min-w-fit">
      <ul className="flex justify-around p-2 text-sm md:text-lg lg:text-xl text-foreground">
        <li className="flex-1 text-center hover:translate-y-[1px] duration-150">
          <a
            href="#hero"
            className="block py-2 px-4 hover:text-accent rounded-lg md:py-3 lg:py-4"
          >
            Home
          </a>
        </li>
        <li className="flex-1 text-center hover:translate-y-[1px] duration-150">
          <a
            href="#about"
            className="block py-2 px-4 hover:text-accent rounded-lg md:py-3 lg:py-4"
          >
            About
          </a>
        </li>
        <li className="flex-1 text-center hover:translate-y-[1px] duration-150">
          <a
            href="#projects"
            className="block py-2 px-4 hover:text-accent rounded-lg md:py-3 lg:py-4"
          >
            Projects
          </a>
        </li>
        <li className="flex-1 text-center hover:translate-y-[1px] duration-150">
          <a
            href="#skills"
            className="block py-2 px-4 hover:text-accent rounded-lg md:py-3 lg:py-4"
          >
            Skills
          </a>
        </li>
        <li className="flex-1 text-center hover:translate-y-[1px] duration-150">
          <a
            href="#contact"
            className="block py-2 px-4 hover:text-accent rounded-lg md:py-3 lg:py-4"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
