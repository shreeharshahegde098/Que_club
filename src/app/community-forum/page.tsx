import React from "react";
import styles from "@/styles/pages/CommunityForum.module.scss";
import Image from "next/image";
import pImg3 from "/public/gallery/gallery-img14.jpg";
export default function CommunityForum() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.hero__content}`}>
          <h1 className={styles.hero__title}>
            Join the conversation, connect with snooker enthusiasts
          </h1>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            corporis repellendus cum voluptatem ducimus est nemo voluptates
            explicabo quisquam omnis!
          </p>
          <div className="primary__button">Join the Slack</div>
        </div>
      </section>
      <section className={`container ${styles.events__section}`}>
        <h2 className={styles.events__head}>Join with us in our events</h2>
        <div className={styles.event}>
          <p className={styles.event__body}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            voluptates, natus nobis voluptas iure nisi Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Corporis voluptates, natus nobis
            voluptas iure nisi
          </p>
          <div className={styles.event__imgWrap}>
            <Image src={pImg3} alt="eventImg" className={styles.event__img} />
          </div>
          <div className={`primary__button ${styles.events__btn}`}>
            All events
          </div>
        </div>
      </section>
      <section className={`container ${styles.slack__section}`}>
        <div className={styles.slack__head}>Join us on Slack</div>
        <p className={styles.slack__description}>
          Join our vibrant snooker community and engage in lively discussions
          with fellow enthusiasts
        </p>
        <div className={`primary__button ${styles.slack__btn}`}>
          Join the Slack
        </div>
      </section>
    </main>
  );
}
