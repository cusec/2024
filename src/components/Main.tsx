import Image from "next/image";
import logoPrimaryDark from '../assets/logo-primary-dark.svg'
const Main = () => {
  return (
    <main className="mx-6 lg:mx-24 h-48 relative p-[7px] mt-12">
      <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute top-0 left-0"></div>
      <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute top-0 right-0"></div>
      <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute bottom-0 left-0"></div>
      <div className="w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute bottom-0 right-0"></div>
      <div className="w-full h-full bg-white border-[5px] border-blue-600">
        <section className="p-8">
        <Image
          src={logoPrimaryDark}
          alt="CUSEC 2024 logo primary dark"
          />
          </section>
      </div>
    </main>
  );
};

export default Main;
