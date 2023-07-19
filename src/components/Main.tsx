import Image from "next/image";
import Link from "next/link";
import logoPrimaryDark from '../assets/logo-primary-dark.svg'
const Main = () => {
  return (
    <main className="mx-6 lg:mx-24 relative p-[7px] mt-12">
      <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute top-0 left-0"></div>
      <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute top-0 right-0"></div>
      <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute bottom-0 left-0"></div>
      <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute bottom-0 right-0"></div>
      <div className="w-full h-full bg-white bg-opacity-70 border-[5px] border-blue-600">
        <section className="p-8 text-center mx-auto">
        <Image
          src={logoPrimaryDark}
            alt="CUSEC 2024 logo primary dark"
            layout="responsive"
            className="max-w-sm mx-auto"
          />
          <p className="font-semibold text-[18px] leading-[25px] trakcing-wider">
          Canadian University Software Engineering Conference
          </p>
          <p>
          Janury 12-24 <span>ellipse</span> In-Person Event
          </p>
          <button>
          Join Now Button
          </button>
          <Link href="" className="block">
          Interested in Sponsoring?
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Main;
