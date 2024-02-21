"use client";
import classnames from "classnames";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Flex } from "@radix-ui/themes";

const Sidebar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/process", label: "Our Process" },
    { href: "/services", label: "Services" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className="sidebar">
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
    { href: "/contact", label: "Contact" },
  ];
  return (
    <ul className="flex space-x-6">
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
