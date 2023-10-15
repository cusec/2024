import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  toggleMobileMenu?: () => void; // Optional prop, only passed in for mobile nav links
};

const NavLink: React.FC<NavLinkProps> = ({ href, children, toggleMobileMenu}) => (
    <Link
    onClick={toggleMobileMenu}
      href={href}
      className="flex uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
    >
      {children}
    </Link>
  );


export default NavLink