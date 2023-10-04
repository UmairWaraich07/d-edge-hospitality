import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import uprightArrow from "../assets/upright-arrow.svg";

const Navbar = () => {
  return (
    <header className="max-w-[1440px] m-auto w-full py-6">
      <nav className="flex items-center justify-between xl:hidden">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} />
          <a className="font-semibold text-white">Logo Here</a>
        </div>
        <img src={hamburger} />
      </nav>

      {/* Desktop navbar */}
      <div className="w-full hidden xl:flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} />
          <a className="font-semibold text-white">Logo Here</a>
        </div>

        <nav className="flex items-center justify-center gap-8">
          <li className="list-none">
            <a href="#" className="text-white  hover:opacity-100">
              Home
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="text-white text-sm opacity-70 hover:opacity-100"
            >
              Trading Membership
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="text-white text-sm opacity-70 hover:opacity-100"
            >
              Reservation Types
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="text-white text-sm opacity-70 hover:opacity-100"
            >
              Blogs
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="text-white text-sm opacity-70 hover:opacity-100"
            >
              Terms and condition
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="text-white text-sm opacity-70 hover:opacity-100"
            >
              Career
            </a>
          </li>
        </nav>

        <a
          href="#"
          className="group flex items-center justify-center p-4 rounded-[10px] shadow-md bg-white transition border-2 border-transparent"
        >
          <p className="text-primary font-semibold">Booking Station</p>
          <img src={uprightArrow} className="ml-4" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
