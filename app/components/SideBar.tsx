"use client";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Flex } from "@radix-ui/themes";
import Image from "next/image";
import logo from "../logo.png";

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
  const website = "https://calendly.com/hwarangarcher";
  return (
    <nav className="sidebar w-[300px] border-r-2 min-h-screen">
      <Image
        src={logo}
        width={200}
        height={200}
        alt="logo"
        className="max-h-[200px]"
      ></Image>
      <Container>
        <Flex>
          <Link href="/"></Link>
          <NavLinks />
        </Flex>
      </Container>
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
        <li key={link.href}>
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
