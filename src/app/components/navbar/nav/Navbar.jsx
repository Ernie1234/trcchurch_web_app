"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { links } from "@/app/libs/data";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import Button1 from "../../btn/Button1";
import styles from "./navstyle.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const { mode } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleFn = () => {
    setIsOpen((prev) => !prev);
  };
  const closeFn = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={styles.nav}
        style={mode === "light" ? { color: "black" } : { color: "black" }}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image alt="Logo" src="/images/Logo.png" width={48} height={48} />
          </Link>
          <ul className={styles.links}>
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                className={pathname === link.url ? styles.active : styles.link}
              >
                {link.title}
              </Link>
            ))}
          </ul>
          <div className={styles.btn__cta}>
            <div className={styles.menuIcon}>
              <HiMenuAlt3 size={35} onClick={toggleFn} />
            </div>
            <Button1 title="Log In" />
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.navigation}>
          <div className={styles.navigation__close} onClick={closeFn}>
            <AiOutlineClose size={40} />
          </div>
          <ul className={styles.navigation__links}>
            {links.map((link, i) => (
              <Link
                key={link.title}
                href={link.url}
                onClick={closeFn}
                className={
                  pathname === link.url
                    ? styles.navigation__active
                    : styles.navigation__link
                }
              >
                <span>{i + 1}</span>
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
