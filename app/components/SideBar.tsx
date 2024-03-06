"use client";
import { Container, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import logo from "../logo_1.png";
import YelpReview from "./YelpReview";
import BBBReview from "./BBBReview";

const Sidebar = () => {
  const schedulingWebsite = "https://calendly.com/tribcontractservices";

  return (
    <nav className=" hidden md:block lg:flex flex-col fixed left-0 top-0 h-full w-[208px] border-r-2 border-black bg-stone-200 text-black">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={logo}
            width={208}
            height={208}
            alt="logo"
            className="max-h-auto pb-2"
          />
        </div>
      </div>
      <Container className="py-4 pl-4">
        <Flex className="flex-col space-y-4">
          <Link href="/" passHref className="text-zinc-500 hover:text-black">
            Home
          </Link>
          <Link
            href="/about"
            passHref
            className="text-zinc-500 hover:text-black"
          >
            About Us
          </Link>
          <Link
            href="/process"
            passHref
            className="text-zinc-500 hover:text-black"
          >
            Our Process
          </Link>
          <Link
            href="/services"
            passHref
            className="text-zinc-500 hover:text-black"
          >
            Services
          </Link>
          <Link
            href="/reviews"
            passHref
            className="text-zinc-500 hover:text-black"
          >
            Reviews
          </Link>
        </Flex>
        <div className="flex justify-center py-8">
          <YelpReview />
          <BBBReview />
        </div>

        <a
          href={schedulingWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-white transition-colors self-center pb-4 mb-4"
        >
          Schedule an Appointment
        </a>
      </Container>
    </nav>
  );
};

export default Sidebar;
