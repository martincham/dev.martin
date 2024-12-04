const Navbar = () => {
  return (
    <nav className="z-50 sticky top-2 shadow-md border border-translucent-white hover:border-white backdrop-blur-md rounded-full">
      <ul className="flex justify-around p-4">
        <li>
          <a href="#hero" className="">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
