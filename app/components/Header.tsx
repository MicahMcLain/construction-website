import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const facebook =
    "https://www.facebook.com/profile.php?id=61556115710244&mibextid=sCpJLy";
  return (
    <div className="flex justify-evenly border-b border-black bg-gray-900 text-white py-4">
      <div>
        <a href={facebook} target={"_blank"} className="self-center mb-2">
          <FaFacebook color="blue" className="w-10 h-10 flex justify-end" />
        </a>
      </div>
      <div className="flex items-center">
        <IoMdMail className="w-10 h-10" />
        <p>: Tribcontractservices@gmail.com</p>
      </div>
      <div className="flex items-center">
        <FaPhoneAlt className="w-8 h-8" />
        <p>: 513-882-9110</p>
      </div>
    </div>
  );
};

export default Header;
