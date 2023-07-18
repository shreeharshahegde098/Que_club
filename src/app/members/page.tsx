import React from "react";
import styles from "@/styles/pages/Members.module.scss";
import SectionHead from "@/components/SectionHead";
import MemberShipCard from "@/components/MemberShipCard";
import Testimonial from "@/components/Testimonial";
export default function Members() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.hero__content}`}>
          <h1 className={styles.hero__title}>
            Unlock a world of opportunities as a club member.
          </h1>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            corporis repellendus cum voluptatem ducimus est nemo voluptates
            explicabo quisquam omnis!
          </p>
        </div>
      </section>
      <section className={styles.members__section}>
        <SectionHead head="Join us Today" subHead="Out Pricing" />
        <div className={styles.members__inner}>
          <MemberShipCard popular={false} headTitle="Pro member" price="3000" />
          <MemberShipCard
            popular={true}
            headTitle="Regular member"
            price="2000"
          />
          <MemberShipCard
            popular={false}
            headTitle="Premium member"
            price="5000"
          />
        </div>
      </section>
      <section className={styles.testimonial__section}>
        <SectionHead head="What they Say" subHead="Testimonials" />
        <Testimonial />
      </section>
    </main>
  );
}
