import { FC } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

interface PostProps {
  image: string;
  placeholder: string;
  type_text_1: string;
  type_text_2: string;
  type_text_3: string;
}

const CardCreatePost: FC<PostProps> = ({
  image,
  placeholder,
  type_text_1,
  type_text_2,
  type_text_3,
}) => {
  return (
    <div className="flex flex-col bg-cardcol rounded-2xl shadow-md">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt="image"
          />
          <div className="flex-grow">
            <input
              type="search"
              value={placeholder}
              placeholder={placeholder}
              className="pl-10 pr-4 py-2 w-full bg-inputcol rounded-full focus:outline-none"
            />
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mx-4" />
      <div className="flex justify-around items-center text-gray-400 py-2">
        <div className="flex items-center justify-center rounded-none rounded-bl-2xl gap-2">
          <MapPin color="#f02849" />
          <p className="text-sm text-gray-500">{type_text_1}</p>
        </div>
        <div className="flex items-center justify-center rounded-none rounded-bl-2xl gap-2">
          <Phone color="#45bd62" />
          <p className="text-sm text-gray-500">{type_text_2}</p>
        </div>
        <div className="flex items-center justify-center rounded-none rounded-bl-2xl gap-2">
          <Mail color="#f7b928" />
          <p className="text-sm text-gray-500">{type_text_3}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCreatePost;
