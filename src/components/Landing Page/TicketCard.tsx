import Link from "next/link";

type TicketCardProps = {
  title: string;
  description: string;
  studentPrice: number;
  professionalPrice: number;
  features: string[];
  buttonLink: string;
  themeColor: string;
};

export default function TicketCard({
  title,
  description,
  studentPrice,
  professionalPrice,
  features,
  buttonLink,
  themeColor,
}: TicketCardProps) {
  // The following 4 lines of code are for the calculation of the angle and width of the ribbon banner for the VIP Card. The width and the height can be altered to make the ribbon banner bigger or smaller. The values for width and height are in tailwind units, where 4 = 1rem, so 36 = 9rem and 28 = 7rem.
  const width = 40;
  const height = 30;
  const hypotenuse = Math.sqrt(width * width + height * height);
  const angle = Math.atan2(height, width) * (180 / Math.PI);

  return (
    <div
      className={`${
        themeColor === "roseQuartz"
          ? "bg-gradient-to-tl from-roseQuartz to-goldenApricot"
          : "bg-gradient-to-tr from-roseQuartz via-lavenderFog to-royalPurple"
      } mx-auto rounded-3xl shadow-[0_10px_60px_-15px_rgba(0,0,0,.8)] relative`}
    >
      <section className="bg-black bg-opacity-60 text-white space-y-6 flex flex-col py-10 px-10 rounded-3xl h-full">
        <h3
          className={`text-[20px] text-center font-semibold uppercase ${
            themeColor === "roseQuartz"
              ? "text-roseQuartz"
              : "text-goldenApricot"
          }`}
        >
          {title}
        </h3>

        <p className="text-center">{description}</p>

        <div className="mx-auto">
          <p>
            <span
              className={`font-semibold ${
                themeColor === "roseQuartz"
                  ? "text-roseQuartz"
                  : "text-goldenApricot"
              }`}
            >
              &nbsp; ${studentPrice}
              {"  "}
            </span>
            /{"  "}student
          </p>
          <p>
            <span
              className={`font-semibold ${
                themeColor === "roseQuartz"
                  ? "text-roseQuartz"
                  : "text-goldenApricot"
              }`}
            >
              ${professionalPrice}
              {"  "}
            </span>
            /{"  "}professional
          </p>
        </div>

        <Link
          className={`drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${
            themeColor === "roseQuartz"
              ? "bg-roseQuartz hover:bg-royalBlue hover:text-rose-400"
              : "bg-goldenApricot hover:bg-royalBlue hover:text-amber-300"
          } mx-auto px-5 md:px-10 py-1 mt-3 md:mt-6 text-center rounded-full uppercase md:text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:text-white`}
          href={buttonLink}
        >
          Buy Now
        </Link>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex align-center">
              <span className="pr-4 relative flex items-center justify-center">
                
                {/* Checkmark background decagon*/}
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 22 23"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    themeColor === "roseQuartz"
                      ? "fill-roseQuartz"
                      : "fill-goldenApricot"
                  }`}
                >
                  <path
                    d="M4.35654 20.7689L10.8486 22.7606L17.4689 20.7689L21.4837 15.4162V8.73579L17.4689 3.00969L10.8486 0.769043L4.01485 3.00969L0 8.73579V15.4162L4.35654 20.7689Z"
                    // fill="#E48BB7"
                  />
                </svg>
                
                {/* Checkmark */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`absolute`}
                >
                  <rect width="18" height="18" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        href="#image0_217_621"
                        transform="scale(0.0208333)"
                      />
                    </pattern>
                    <image
                      id="image0_217_621"
                      width="48"
                      height="48"
                      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2YQQ6CMBAA+0M4EA76Hj2oVz8ovkI0YxqKJiZIgdpucSfhJMEZ08KiMYqiKMpaAQqgAa5AaXICqICWN3dgazKVzyeCYXn5EUA9It9jzylMpvI9F5OxvJwA5snLWEKMb9ihTbxJ7a7y6142QOnmjybkZoklX/1iBkklHyQitfyiiJhrvvW4sD2nFiVvcRvWF6+IqA8pursNoSKiP2HxX0KjEcnGA+Z/8VbMbMOCiBA/QBBmijycTFr5hREy5CNExHspJ3xE/H8U6CJuWcovfG+dPYJIi0gv/xExFRnyPcBxgvzBSAQ4ecifjWT4HiFbfiQiD/keYO/u8fbYvT5QFEX5C54al06Bh89naQAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>


              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className={`${title === "VIP" ? "block" : "hidden"}`}></div>
      </section>
      <div
        className={`${
          title === "VIP" ? "block" : "hidden"
        } absolute -top-3 -right-3 overflow-hidden rounded-sm`}
        style={{
          width: `${width / 4}rem`,
          height: `${height / 4}rem`,
        }}
      >
        {/* The next 2 divs are the triangles at the top left and bottom left which provide the wraparound effect. */}
        <div className="absolute h-3 w-5 top-0 left-0 bg-amber-600"></div>
        <div className="absolute h-3 w-3 bottom-0 right-0 bg-amber-600"></div>
        <Link
          href="/"
          className="block bg-goldenApricot text-center text-purple-800 font-semibold tracking-wide uppercase py-2 absolute bottom-0 right-0 origin-bottom-right shadow-sm transition ease-in-out duration-500 hover:bg-amber-300 hover:font-bold"
          style={{
            width: `${(hypotenuse / width) * 100}%`,
            transform: `rotate(${angle}deg)`,
          }}
        >
          Popular
        </Link>
      </div>
    </div>
  );
}
