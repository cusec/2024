import Image from "next/image";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-black/[.78]">
      <Image
        src={logo}
        alt="CUSEC logo"
        width={100}
        height={100}
      />
</nav>
  );
};

export default Navbar;
