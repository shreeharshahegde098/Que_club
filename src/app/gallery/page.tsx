"use client";

import React from "react";
import featuredImg from "/public/gallery/gallery-img.jpg";
import img01 from "/public/gallery/gallery-img09.jpg";
import img02 from "/public/gallery/gallery-img02.jpeg";
import img03 from "/public/gallery/gallery-img03.jpg";
import img04 from "/public/gallery/gallery-img04.jpg";
import img05 from "/public/gallery/gallery-img05.jpg";
import img06 from "/public/gallery/gallery-img10.jpg";
import img07 from "/public/gallery/gallery-img11.jpg";
import img08 from "/public/gallery/gallery-img12.jpg";
import img09 from "/public/gallery/gallery-img13.jpg";
import img10 from "/public/gallery/gallery-img14.jpg";
import img11 from "/public/gallery/gallery-img07.jpg";
import Image from "next/image";
import styles from "@/styles/pages/Gallery.module.scss";
import { useTransition, animated } from "@react-spring/web";
import SectionHead from "@/components/SectionHead";

const images = [
  { src: featuredImg, alt: "featured", id: "100" },
  { src: img01, alt: "img01", id: "101" },
  { src: img02, alt: "img02", id: "102" },
  { src: img03, alt: "img03", id: "103" },
  { src: img04, alt: "img04", id: "104" },
  { src: img05, alt: "img05", id: "105" },
  { src: img06, alt: "img06", id: "106" },
  { src: img07, alt: "img07", id: "107" },
  { src: img08, alt: "img08", id: "108" },
  { src: img09, alt: "img09", id: "109" },
  { src: img10, alt: "img10", id: "110" },
  { src: img11, alt: "img11", id: "111" },
];
export default function Gallery() {
  const transition = useTransition(images, {
    trail: 400 / images.length,
    from: { opacity: 0, scale: 0, x: "-100%" },
    enter: { opacity: 1, scale: 1, x: "0%" },
    leave: { opacity: 0, scale: 0 },
  });
  return (
    <main className="container">
      <section className={styles.section}>
        <SectionHead head="Our Gallery" subHead="Showcase" />
        <div className={styles.gallery__grid}>
          {transition((style, { src, alt, id }, _, index) => (
            <animated.div
              className={
                index === 0 ? `${styles.card} ${styles.featured}` : styles.card
              }
              key={id}
              style={{ ...style }}
            >
              <Image
                alt={alt}
                src={src}
                placeholder="blur"
                className={styles.card__img}
                fill
                sizes="100vw"
              />
            </animated.div>
          ))}
        </div>
      </section>
    </main>
  );
}
