import React from "react";
import styles from "@/styles/components/Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.hero}>
          <p className={styles.hero__quote}>
            Your ultimate snooker destination
          </p>
        </div>
        <div className={styles.footer__navContainer}>
          <div className={styles.logo__container}>
            <div className={styles.logo}>Que Club</div>
            <p className={styles.logo__quote}>
              Experience snooker at its finest
            </p>
          </div>
          <div className={styles.nav}>
            <ul className={styles.nav__ul}>
              <div>
                <li className={styles.nav__link}>
                  <Link href="/about">About</Link>
                </li>
                <li className={styles.nav__link}>
                  <Link href="/events">Events</Link>
                </li>
                <li className={styles.nav__link}>
                  <Link href="/gallery">Gallery</Link>
                </li>
              </div>
              <div>
                <li className={styles.nav__link}>
                  <Link href="/members">Members</Link>
                </li>
                <li className={styles.nav__link}>
                  <Link href="/contact">Contact us</Link>
                </li>
                <li className={styles.nav__link}>
                  <Link href="/">Resources</Link>
                </li>
              </div>
              <li>
                <p>Let&apos;s chat</p>
                <Link href="mailto:adarshshanbhag5@gmail.com">
                  queclub@gmail.com
                </Link>
                <div className={styles.social}>
                  <p>twitter</p>
                  <p>insta</p>
                  <p>fb</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
