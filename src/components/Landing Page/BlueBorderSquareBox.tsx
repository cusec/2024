type BlueBorderSquareBoxProps = {
  children: React.ReactNode;
  teamCard?: boolean;
};

export default function BlueBorderSquareBox({
  children,
  teamCard,
}: BlueBorderSquareBoxProps) {
  if (teamCard) {
    return (
      <div className="relative p-[7px] group">
        <div className="flex w-[17px] md:w-[21px] aspect-square group-hover:bg-white border-[2px] border-transparent group-hover:border-blue-600 absolute top-0 left-0 z-10 hover:scale-125 transition-all ease-in-out duration-500 hover:-rotate-45"></div>
        <div className="flex w-[17px] md:w-[21px] aspect-square group-hover:bg-white border-[2px] border-transparent group-hover:border-blue-600 absolute top-0 right-0 z-10 hover:scale-125 transition-all ease-in-out duration-500 hover:rotate-45"></div>
        <div className="flex w-[17px] md:w-[21px] aspect-square group-hover:bg-white border-[2px] border-transparent group-hover:border-blue-600 absolute bottom-0 left-0 z-10 hover:scale-125 transition-all ease-in-out duration-500 hover:rotate-45"></div>
        <div className="flex w-[17px] md:w-[21px] aspect-square group-hover:bg-white border-[2px] border-transparent group-hover:border-blue-600 absolute bottom-0 right-0 z-10 hover:scale-125 transition-all ease-in-out duration-500 hover:-rotate-45"></div>
        <div className="w-full h-full bg-white transition-all ease-in-out duration-1000 border-[4px] border-transparent group-hover:border-blue-600 group-hover:bg-gradient-to-br from-purple-300 to-orange-200">
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative p-[7px]">
        <div className="flex w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute top-0 left-0 z-10 hover:scale-125 transition ease-in-out duration-500 hover:-rotate-45"></div>
        <div className="flex w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute top-0 right-0 z-10 hover:scale-125 transition ease-in-out duration-500 hover:rotate-45"></div>
        <div className="flex w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute bottom-0 left-0 z-10 hover:scale-125 transition ease-in-out duration-500 hover:rotate-45"></div>
        <div className="flex w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute bottom-0 right-0 z-10 hover:scale-125 transition ease-in-out duration-500 hover:-rotate-45"></div>
        <div className="w-full h-full bg-white bg-opacity-70 border-[5px] border-blue-600 backdrop-blur-[2px] transition ease-in-out duration-700 hover:bg-white/30 hover:backdrop-blur-[1.5px]">
          {children}
        </div>
      </div>
    );
  }
}
