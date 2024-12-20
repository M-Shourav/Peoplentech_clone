import Container from "../Container";
import { BsFillTelephoneInboundFill, BsWechat } from "react-icons/bs";
import Link from "next/link";
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

const TopHeader = () => {
  return (
    <div className="hidden md:inline-block w-full bg-lightSky py-3 text-white">
      <Container className="h-full flex items-center gap-5 justify-between">
        <div className="flex items-center gap-x-5 text-xs md:text-sm">
          <p className="flex items-center gap-x-1">
            <BsFillTelephoneInboundFill className="text-base font-semibold" />
            <span>+880 1710267985, 01826341073</span>
          </p>
          <p className="flex items-center gap-x-1">
            <span>
              <BsWechat />
            </span>
            <Link
              href="mailto:am.masum1129@gmail.com"
              className="hover:underline hover:underline-offset-2 duration-200"
            >
              am.masum1129@gmail.com
            </Link>
          </p>
        </div>
        <div className="hidden md:inline-flex items-center gap-x-5">
          {Social?.map((item) => (
            <div
              className="bg-white w-6 h-6 flex items-center 
              justify-center rounded-full"
              key={item?.id}
            >
              <Link
                href={item?.href}
                target="_blank"
                className={
                  item?.id === 3 ? "text-red-500" : "text-lightSky text-sm p-1"
                }
              >
                {item?.icons}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
