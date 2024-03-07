"use client";
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const facebook =
    "https://www.facebook.com/profile.php?id=61556115710244&mibextid=sCpJLy";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center border-b border-black bg-gray-900 text-white py-4">
      <div className="flex items-center mb-2 md:mb-0">
        <IoMdMail className="w-10 h-10 pl-2" />
        <p className="ml-2">: tribcontractservices@gmail.com</p>
      </div>
      <div className="flex items-center mb-2 md:mb-0">
        <FaPhoneAlt className="w-8 h-8" />
        <p className="ml-2">: 513-882-9110</p>
      </div>
      <div>
        <a href={facebook} target="_blank" className="self-center">
          <FaFacebook color="blue" className="w-10 h-10 pr-2" />
        </a>
      </div>
      {/* Hamburger Menu */}
      <div className="lg:hidden flex top-0 right-0">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:bg-gray-700 p-2"
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 text-white z-50 flex justify-center items-center">
          <Container className="h-full pt-12">
            <Flex className="flex-col justify-center h-full space-y-4">
              <Link
                href="/"
                passHref
                className="text-white hover:text-gray-300 border-t border-b border-white py-2 text-lg text-center"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                passHref
                className="text-white hover:text-gray-300 border-t border-b border-white py-2 text-lg text-center"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/process"
                passHref
                className="text-white hover:text-gray-300 border-t border-b border-white py-2 text-lg text-center"
                onClick={toggleMenu}
              >
                Our Process
              </Link>
              <Link
                href="/services"
                passHref
                className="text-white hover:text-gray-300 border-t border-b border-white py-2 text-lg text-center"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/reviews"
                passHref
                className="text-white hover:text-gray-300 border-t border-b border-white py-2 text-lg text-center"
                onClick={toggleMenu}
              >
                Reviews
              </Link>
              <button
                onClick={toggleMenu}
                className="text-white absolute top-0 right-0 m-4"
              >
                <FiX className="w-6 h-6" />
              </button>
            </Flex>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Header;
