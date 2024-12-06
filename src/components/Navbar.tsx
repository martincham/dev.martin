const Navbar = () => {
  return (
    <nav className="m-8 z-50 sticky top-2 shadow-md  border transition-all duration-300 hover:border-foreground  hover:backdrop-blur-2xl backdrop-blur-md rounded-full">
      <ul className="flex justify-around p-4 text-sm md:text-lg lg:text-xl text-foreground ">
        <li>
          <a href="#hero" className="hover:text-accent">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-purple">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-purple">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
