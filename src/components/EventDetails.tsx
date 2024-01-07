import Link from "next/link";
import NavLink from "./NavLink";

type TriangleIconProps = {
  isEventDetailsClicked: boolean;
};

const TriangleIcon: React.FC<TriangleIconProps> = ({ isEventDetailsClicked }) => (
  <svg
    className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 ${isEventDetailsClicked ? "fill-white" : "rotate-180 fill-[url(#custom-gradient)]"}`}
    width="12px"
    height="20px"
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    
  </svg>
);


type EventDetailsProps = {
  clicked: () => void;
  toggleMobileMenu: () => void;
  toggleEventDetails: () => void;
  isEventDetailsClicked: boolean;
  isMobileScreen: boolean;
};

export default function EventDetails({
  clicked,
    toggleMobileMenu,
  toggleEventDetails,
  isEventDetailsClicked,
  isMobileScreen,
}: EventDetailsProps) {
  if (!isMobileScreen) {
    return (
      <button
      aria-label="Event Details Button"
        className="relative uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
        onMouseEnter={() => toggleEventDetails()}
        onMouseLeave={() => toggleEventDetails()}
      >
        {/* Event Details button is special case, it has a dropdown menu */}
        <span className="flex space-x-2">
          <Link href="/#about">Event Details</Link>

          <svg
            className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 ${
              isEventDetailsClicked
                ? "fill-white"
                : "rotate-180 fill-[url(#custom-gradient)]"
            }`}
            width="12px"
            height="20px"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient
              id="custom-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop stopColor="#AC65E3" offset="0%" />
              <stop stopColor="#E087BB" offset="50%" />
              <stop stopColor="#FFB963" offset="100%" />
            </linearGradient>
            <title>triangle-icon</title>
            <g id="drop" transform="translate(32.000000, 42.666667)">
              <path
                d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
                id="Combined-Shape"
              />
            </g>
          </svg>

        </span>
        <div
          className={`absolute top-full mt-3 left-0 right-5 text-xl transition-all ease-in-out duration-1000 overflow-hidden ${
            isEventDetailsClicked ? "max-h-0" : "max-h-40"
          }`}
        >
          <div className="bg-gradient-to-br from-lavanderFog to-goldenApricot rounded-2xl">
            <ul className="space-y-2 flex flex-col bg-black/[.65] rounded-2xl p-4">
              <NavLink href="/">Sign up</NavLink>
              <NavLink href="/">Schedule</NavLink>
              <NavLink href="/sponsors">Sponsors</NavLink>
            </ul>
          </div>
        </div>
      </button>
    );
  } else {
    <button
      className="relative uppercase text-white text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot transition-all ease-in-out duration-500 hover:scale-110 md:hover:scale-125 md:text-sm md:px-3 md:py-2 md:font-medium tracking-wider"
      onMouseEnter={() => toggleEventDetails()}
      onMouseLeave={() => toggleEventDetails()}
    >
      <span className="flex space-x-2">
        <Link href="/#about">Event Details</Link>

        <svg
          className={`scale-x-125 scale-y-75 transition ease-in-out duration-1000 ${
            isEventDetailsClicked
              ? "fill-white"
              : "rotate-180 fill-[url(#sidebar-gradient)]"
          }`}
          width="12px"
          height="30px"
          viewBox="0 0 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient
            id="sidebar-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop stopColor="#AC65E3" offset="0%" />
            <stop stopColor="#E087BB" offset="50%" />
            <stop stopColor="#FFB963" offset="100%" />
          </linearGradient>
          <title>triangle-icon</title>
          <g id="drop" transform="translate(32.000000, 42.666667)">
            <path
              d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
              id="Combined-Shape"
            />
          </g>
        </svg>

      </span>
      <div
        className={`top-full left-0 right-5 mt-3 text-xl transition-all ease-in-out duration-1000 overflow-hidden ${
          isEventDetailsClicked ? "max-h-0" : "max-h-40"
        }`}
      >
        <ul className="space-y-2 flex flex-col p-4">
          <NavLink toggleMobileMenu={toggleMobileMenu} href="/">
            Sign up
          </NavLink>
          <NavLink toggleMobileMenu={toggleMobileMenu} href="/">
            Schedule
          </NavLink>
          <NavLink toggleMobileMenu={toggleMobileMenu} href="/sponsors">
            Sponsors
          </NavLink>
        </ul>
      </div>
    </button>;
  }
}
