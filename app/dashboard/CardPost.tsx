import { FC } from "react";
import Image from "next/image";
import { Earth, MessageCircle, Share2, ThumbsUp } from "lucide-react";

interface PostProps {
  postId: string;
  name: string;
  image: string;
  postImage?: string;
  message: string;
  location?: string;
  timestamp?: string;
}

const CardPost: FC<PostProps> = ({
  name,
  image,
  postImage,
  message,
  location,
  timestamp,
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
            alt={name}
          />
          <div>
            <p className="text-lg font-medium">{name}</p>
            {location && (
              <div className="flex flex-row text-xs text-gray-400 gap-2">
                <p>{location}</p>
                <Earth size={12} strokeWidth={2.25}/>
              </div>
            )}
            {timestamp && (
              <p className="text-xs text-gray-400">{timestamp}</p>
            )}
          </div>
        </div>
        <p className="pt-1">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96">
          <Image src={postImage} alt="postImage" objectFit="cover" layout="fill" />
        </div>
      )}
      <hr className="border-gray-300 mx-4" />
      <div className="flex justify-around items-center text-gray-400 py-1">
        <div
          className={`flex flex-col items-center justify-center rounded-none rounded-bl-2xl`}
        >
          <ThumbsUp className={`h-4`}/>
          <p className="text-xs">Like</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-none">
          <MessageCircle className="h-4" />
          <p className="text-xs">Comment</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-none rounded-br-2xl">
          <Share2 className="h-4" />
          <p className="text-xs">Share</p>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
