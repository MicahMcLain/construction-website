"use client";
import { Container, Flex } from "@radix-ui/themes";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../logo_1.png";
import YelpReview from "./YelpReview";
import BBBReview from "./BBBReview";

const Sidebar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/process", label: "Our Process" },
    { href: "/services", label: "Services" },
    { href: "/reviews", label: "Reviews" },
  ];
  const schedulingWebsite = "https://calendly.com/hwarangarcher";

  return (
    <nav className="sidebar">
      <Image
        src={logo}
        width={300}
        height={300}
        alt="logo"
        className="max-h-[300px] pb-2"
      ></Image>
      <Container className="pb-4">
        <Flex className="flex-col space-y-4 gap">
          <Link href="/"></Link>
          <NavLinks />
        </Flex>
      </Container>
      <YelpReview />
      <BBBReview />
      <a
        href={schedulingWebsite}
        target={"_blank"}
        className="text-zinc-600 hover:text-black transition-colors self-center pb-4 mb-4"
      >
        Schedule an Appointment
      </a>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/process", label: "Our Process" },
    { href: "/services", label: "Services" },
    { href: "/reviews", label: "Reviews" },
  ];
  return (
    <ul className="">
      {links.map((link) => (
        <li className="pb-3" key={link.href}>
          <Link
            className={classnames({
              "nav-link": true,
              "!text-black": currentPath === link.href,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
