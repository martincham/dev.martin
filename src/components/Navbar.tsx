const Navbar = () => {
  return (
    <nav className=" z-50 sticky top-0 bg-background  min-w-full max-w-3xl border-b border-muted">
      <div className="flex flex-wrap  content-stretch  transition-colors duration-200">
        <a
          href="#about"
          className="grow text-md font-regular  block py-2 px-1 sm:px-4 hover:text-golden text-center hover:translate-y-[1px] duration-150 border-r box-border border-muted"
        >
          About
        </a>

        <a
          href="#projects"
          className="grow text-md font-regular  block py-2 px-1 sm:px-4  hover:text-golden text-center hover:translate-y-[1px] duration-150 border-r box-border border-muted"
        >
          Projects
        </a>

        <a
          href="#experience"
          className="grow text-md font-regular block py-2 px-1 sm:px-4 hover:text-golden text-center hover:translate-y-[1px] duration-150 border-r box-border border-muted"
        >
          Experience
        </a>

        <a
          href="#skills"
          className="grow text-md font-regular block py-2 px-1 sm:px-4 hover:text-golden text-center hover:translate-y-[1px] duration-150 box-border border-muted"
        >
          Skills
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
