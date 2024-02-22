"use client";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Flex } from "@radix-ui/themes";
import Image from "next/image";
import logo from "../logo_1.png";
import { FaFacebook } from "react-icons/fa";

const Sidebar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/process", label: "Our Process" },
    { href: "/services", label: "Services" },
    { href: "/reviews", label: "Reviews" },
    // { href: "/contact", label: "Contact" },
  ];
  const schedulingWebsite = "https://calendly.com/hwarangarcher";
  const facebook =
    "https://www.facebook.com/profile.php?id=61556115710244&mibextid=sCpJLy";
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
      <a
        href={schedulingWebsite}
        target={"_blank"}
        className="text-zinc-600 hover:text-zinc-900 transition-colors self-center pb-4"
      >
        Schedule an Appointment
      </a>

      <a href={facebook} target={"_blank"} className="self-center">
        <FaFacebook color="blue" className="w-10 h-10" />
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
    // { href: "/contact", label: "Contact" },
  ];
  return (
    <ul className="">
      {links.map((link) => (
        <li className="pb-3" key={link.href}>
          <Link
            className={classnames({
              "nav-link": true,
              "!text-zinc-900": currentPath === link.href,
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
