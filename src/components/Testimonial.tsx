"use client";
import React, { useRef } from "react";
import styles from "@/styles/components/Testimonial.module.scss";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image, { StaticImageData } from "next/image";

import client1 from "/public/testimonials/client-1.jpg";
import client2 from "/public/testimonials/client-2.jpg";
import client3 from "/public/testimonials/client-3.jpg";

type PageProps = {
  clientImg: StaticImageData;
  offset: number;
  gradient: string;
  onClick: () => void;
};

const Page = ({ offset, gradient, onClick, clientImg }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      offset={offset}
      speed={0.3}
      onClick={onClick}
      style={{ pointerEvents: "none" }}
    >
      <div className={styles.client__container}>
        <p className={styles.client__quote}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          modi totam mollitia saepe error dolorem, explicabo soluta nam esse
          cupiditate incidunt ea? Quidem, praesentium vel.
        </p>
        <Image src={clientImg} alt="client" className={styles.client__img} />
        <p className={styles.client__name}>John doe</p>
      </div>
    </ParallaxLayer>
  </>
);

export default function Testimonial() {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div className={styles.wrap}>
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={3}
        horizontal
        style={{ overflow: "hidden" }}
      >
        <Page
          offset={0}
          gradient="pink"
          onClick={() => scroll(1)}
          clientImg={client1}
        />
        <Page
          offset={1}
          gradient="teal"
          onClick={() => scroll(2)}
          clientImg={client2}
        />
        <Page
          offset={2}
          gradient="tomato"
          onClick={() => scroll(0)}
          clientImg={client3}
        />
      </Parallax>
    </div>
  );
}
