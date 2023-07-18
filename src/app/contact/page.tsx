import React from "react";
import styles from "@/styles/pages/Contact.module.scss";
import ContactCard from "@/components/ContactCard";

export default function Contact() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.hero__content}`}>
          <h1 className={styles.hero__title}>
            We&apos;re just a cue away. Reach out and let&apos;s talk snooker
          </h1>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            corporis repellendus cum voluptatem ducimus est nemo voluptates
            explicabo quisquam omnis!
          </p>
        </div>
      </section>
      <section className={`container ${styles.card__section}`}>
        <div className={styles.card__inner}>
          <ContactCard
            title="Email"
            text="adarshshanbhag5@gmail.com"
            logo="email"
          />
          <ContactCard title="Location" text="Bengaluru" logo="location" />
          <ContactCard title="Office hours" text="10AM-10PM" logo="clock" />
        </div>
      </section>
    </main>
  );
}
