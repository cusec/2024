type BlueBorderSquareBoxProps = {
  children: React.ReactNode;
};

export default function BlueBorderSquareBox({
  children,
}: BlueBorderSquareBoxProps) {
  return (
    <div className="relative p-[7px]">
      <div className="flex w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute top-0 left-0 z-10 hover:scale-125 transition ease-in-out duration-500 hover:-rotate-45"></div>
      <div className="flex w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute top-0 right-0 z-10 hover:scale-125 transition ease-in-out duration-500 hover:rotate-45"></div>
      <div className="flex w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute bottom-0 left-0 z-10 hover:scale-125 transition ease-in-out duration-500 hover:rotate-45"></div>
      <div className="flex w-[17px] md:w-[21px] aspect-square bg-white border-[2px] border-blue-600 absolute bottom-0 right-0 z-10 hover:scale-125 transition ease-in-out duration-500 hover:-rotate-45"></div>
      <div className="w-full h-full bg-white bg-opacity-70 border-[5px] border-blue-600 backdrop-blur-[2px]">
        {children}
      </div>
    </div>
  );
}
