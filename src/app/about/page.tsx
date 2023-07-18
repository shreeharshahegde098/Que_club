import React from "react";
import styles from "@/styles/pages/About.module.scss";
import Image from "next/image";
import about from "/public/about.jpg";
import SectionHead from "@/components/SectionHead";
import Testimonial from "@/components/Testimonial";

export default function About() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.hero__content}`}>
          <h1 className={styles.hero__title}>About us</h1>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            corporis repellendus cum voluptatem ducimus est nemo voluptates
            explicabo quisquam omnis!
          </p>
        </div>
      </section>
      <section className={styles.about__section}>
        <div className={styles.about__content}>
          <div className={styles.title__small}>About us</div>
          <div className={styles.title__large}>
            Proven Products To Please Any Pool Player
          </div>
          <p className={styles.about__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            eveniet reprehenderit! Accusamus, delectus dolorem. Cupiditate,
            iusto ducimus! Aperiam, quibusdam vitae.
          </p>
          <ul className={styles.about__ul}>
            <li className={styles.about__li}>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className={styles.about__li}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className={styles.about__li}>Lorem ipsum dolor sit.</li>
          </ul>
          <div className="primary__button">About us</div>
        </div>
        <div className={styles.about__imgWrap}>
          <Image src={about} alt="about us" className={styles.about__img} />
        </div>
      </section>
      <section className={styles.testimonial__section}>
        <SectionHead head="What they Say" subHead="Testimonials" />
        <Testimonial />
      </section>
    </main>
  );
}
