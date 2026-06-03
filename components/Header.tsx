import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-green-900 border-t-4 border-green-300">
      <Navbar />
    </header>
  );
};

export default Header;
