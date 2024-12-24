import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Social = [
  {
    id: 1,
    icons: <FaTwitter />,
    href: "https://x.com/MasumAh68543",
  },
  {
    id: 2,
    icons: <FaFacebook />,
    href: "https://web.facebook.com/profile.php?id=100027878711748",
  },
  {
    id: 3,
    icons: <FaYoutube />,
    href: "https://www.youtube.com/@MasumAhmed-cd",
  },
  {
    id: 4,
    icons: <FaLinkedin />,
    href: "https://x.com/MasumAh68543",
  },
];
const SocialLinks = () => {
  return (
    <div className="hidden md:inline-flex items-center gap-x-5">
      {Social?.map((item) => (
        <div
          className="bg-slate-600 w-9 h-9 flex items-center 
            justify-center rounded-full"
          key={item?.id}
        >
          <Link
            href={item?.href}
            target="_blank"
            className="text-white/80 hover:text-skyColor text-base 
            duration-300 ease-in-out"
          >
            {item?.icons}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
