"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "@/styles/components/Navbar.module.scss";
import {
  useSpring,
  animated,
  useSpringRef,
  useTransition,
  useChain,
  config,
} from "@react-spring/web";

const navLinks = [
  { name: "Home", route: "/", id: "100", primary: true },
  { name: "Gallery", route: "/gallery", id: "101", primary: true },
  { name: "Members", route: "/members", id: "102", primary: true },
  { name: "Events", route: "/events", id: "103", primary: true },
  { name: "About", route: "/about", id: "104", primary: true },

  { name: "Contact us", route: "/contact", id: "105", primary: false },
  {
    name: "Community Forum",
    route: "/community-forum",
    id: "106",
    primary: false,
  },
  { name: "Resources", route: "/", id: "107", primary: false },
  { name: "Careers", route: "/", id: "108", primary: false },
];
export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  const springApi = useSpringRef();
  const { size, padding } = useSpring({
    ref: springApi,
    config: config.wobbly,
    from: { size: "0px", padding: "0 0" },
    to: {
      size: menu ? "290px" : "0px",
      padding: menu ? "0 2rem" : "0 0",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(menu ? navLinks : [], {
    ref: transApi,
    trail: 400 / navLinks.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(
    menu ? [springApi, transApi] : [transApi, springApi]
    //    [
    //   0,
    //   menu ? 0.1 : 0.6,
    // ]
  );
  function burgerClickHandler(): void {
    setMenu((state) => !state);
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.navbar__logo}>Que club</div>
        <nav className={styles.navbar}>
          <ul className={styles.navbar__ulleft}>
            {navLinks.map(
              ({ name, route, id, primary }) =>
                primary && (
                  <li className={styles.navbar__links} key={id}>
                    <Link href={route}>{name}</Link>
                  </li>
                )
            )}
          </ul>
          <ul className={styles.navbar__ulright}>
            <li className={styles.book__btn}>
              <Link href="/contact">Book Now</Link>
            </li>
            <div className={styles.burger} onClick={burgerClickHandler}>
              <div
                className={
                  menu
                    ? `${styles.toggle} ${styles.burger__line1}`
                    : `${styles.burger__line1}`
                }
              />
              <div
                className={
                  menu
                    ? `${styles.toggle} ${styles.burger__line2}`
                    : `${styles.burger__line2}`
                }
              />
              <div
                className={
                  menu
                    ? `${styles.toggle} ${styles.burger__line3}`
                    : `${styles.burger__line3}`
                }
              />
            </div>
          </ul>
        </nav>
      </div>
      <animated.nav
        className={`${styles.secondary__navbar}`}
        style={{ width: size, padding: padding }}
      >
        <ul className={styles.secondary__navbar__ul}>
          {transition((style, { name, route, id, primary }) => (
            <animated.li
              className={`${primary ? styles.primary : styles.secondary} ${
                styles.navbar__links
              }`}
              onClick={burgerClickHandler}
              key={id}
              style={{ ...style }}
            >
              <Link href={route}>{name}</Link>
            </animated.li>
          ))}
        </ul>
      </animated.nav>
      <div
        className={
          menu
            ? `${styles.menu__close__active} ${styles.menu__close}`
            : `${styles.menu__close}`
        }
        onClick={burgerClickHandler}
      ></div>
    </header>
  );
}
