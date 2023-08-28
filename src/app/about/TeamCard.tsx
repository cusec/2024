import { StaticImageData } from 'next/image';
import Image from 'next/image';
import BlueBorderSquareBox from '@/components/Landing Page/BlueBorderSquareBox';

type TeamCardProps = {
  name: string;
  university: string;
  image: StaticImageData;
  university_image: StaticImageData;
  pronoun: string;
  role: string;
  sub_role?: string; // Optional parameter
  linkedin?: string; // Optional parameter
  instagram?: string; // Optional parameter
  github?: string; // Optional parameter
  website?: string; // Optional parameter
  email: string;
  fun_fact: string;
};

export default function TeamCard(props: TeamCardProps) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[200px] aspect-square rounded-full bg-gradient-to-br from-royalPurple via-roseQuartz to-goldenApricot">
          <Image src={props.image} alt={props.name} className="overflow-none" />
        </div>
      </div>
    </div>
  );
}
