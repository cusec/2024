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
  return (
    <section className="bg-black bg-opacity-60 shadow mx-auto px-20 text-white space-y-6 flex flex-col">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <span>
          {studentPrice}
          {"  "}
        </span>
        /{"  "}student
      </p>
      <p>
        <span>
          {professionalPrice}
          {"  "}
        </span>
        /{"  "}professional
      </p>
      <Link className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#AD65E3] px-5 md:px-20 py-3 mt-3 md:mt-6 text-center rounded-full uppercase text-[18px] font-semibold text-white tracking-wide transition ease-in-out duration-500 hover:scale-110 hover:bg-goldenApricot hover:text-white" href={buttonLink}>
        Buy Now
      </Link>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="flex align-center">
            <span className="pr-4">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                xmlns="http://www.w3.org/2000/svg"
                className={themeColor === 'roseQuartz' ? 'fill-roseQuartz' : 'fill-goldenApricot'}
              >
                <path
                  d="M4.35654 20.7689L10.8486 22.7606L17.4689 20.7689L21.4837 15.4162V8.73579L17.4689 3.00969L10.8486 0.769043L4.01485 3.00969L0 8.73579V15.4162L4.35654 20.7689Z"
                  // fill="#E48BB7"
                />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
