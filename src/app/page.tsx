import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import about from "/public/about.jpg";
import MemberShipCard from "@/components/MemberShipCard";
import SectionHead from "@/components/SectionHead";
import Testimonial from "@/components/Testimonial";
// import herobg from "/public/gallery/gallery-img14.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={`container ${styles.hero__content}`}>
          <h1 className={styles.hero__title}>
            Unleash Your Cue Mastery at Que Club
          </h1>
          <p className={styles.hero__description}>
            Immerse yourself in the world of snooker excellence at Que Club.
            Join us for thrilling matches, expert coaching, and a vibrant
            community of snooker enthusiasts.
          </p>
          <div className="primary__button">View more</div>
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
