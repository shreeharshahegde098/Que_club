import styles from "@/styles/pages/Events.module.scss";
import Image from "next/image";
import upImg1 from "/public/gallery/gallery-img09.jpg";
import upImg2 from "/public/gallery/gallery-img10.jpg";
import upImg3 from "/public/gallery/gallery-img11.jpg";
import pImg1 from "/public/gallery/gallery-img12.jpg";
import pImg2 from "/public/gallery/gallery-img13.jpg";
import pImg3 from "/public/gallery/gallery-img14.jpg";

const upcommingEvents = [
  {
    img: upImg1,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ea quae pariatur exercitationem voluptates aperiam? Dignissimos tempore at fuga architecto mollitia accusantium, atque voluptate. Tenetur autem voluptatem quod debitis officiis sapiente.",
    id: "01",
  },
  {
    img: upImg2,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ea quae pariatur exercitationem voluptates aperiam? Dignissimos tempore at fuga architecto mollitia accusantium, atque voluptate. Tenetur autem voluptatem quod debitis officiis sapiente.",
    id: "02",
  },
  {
    img: upImg3,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ea quae pariatur exercitationem voluptates aperiam? Dignissimos tempore at fuga architecto mollitia accusantium, atque voluptate. Tenetur autem voluptatem quod debitis officiis sapiente.",
    id: "03",
  },
];

const pastEvents = [
  {
    img: pImg1,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ea quae pariatur exercitationem voluptates aperiam? Dignissimos tempore at fuga architecto mollitia accusantium, atque voluptate. Tenetur autem voluptatem quod debitis officiis sapiente.",
    id: "01",
  },
  {
    img: pImg2,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ea quae pariatur exercitationem voluptates aperiam? Dignissimos tempore at fuga architecto mollitia accusantium, atque voluptate. Tenetur autem voluptatem quod debitis officiis sapiente.",
    id: "02",
  },
  {
    img: pImg3,
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicingelit. Ea quae pariatur exercitationem voluptates aperiam? Dignissimos tempore at fuga architecto mollitia accusantium, atque voluptate. Tenetur autem voluptatem quod debitis officiis sapiente.",
    id: "03",
  },
];

export default function Events() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.hero__content}`}>
          <h1 className={styles.hero__title}>Discover and attend our events</h1>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            corporis repellendus cum voluptatem ducimus est nemo voluptates
            explicabo quisquam omnis!
          </p>
        </div>
      </section>
      <section className={`container ${styles.events__container}`}>
        <div className={styles.upcomming__events}>
          <div className={styles.title}>Upcomming events</div>
          {upcommingEvents.map(({ img, title, body, id }) => (
            <div className={styles.event} key={id}>
              <div className={styles.event__imgWrap}>
                <Image src={img} alt="image1" className={styles.event__img} />
              </div>
              <div className={styles.event__content}>
                <p className={styles.event__title}>{title}</p>
                <p className={styles.event__body}>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.past__events}>
          <div className={styles.title}>Past events</div>
          {pastEvents.map(({ img, title, body, id }) => (
            <div className={styles.event} key={id}>
              <div className={styles.event__imgWrap}>
                <Image src={img} alt="image1" className={styles.event__img} />
              </div>
              <div className={styles.event__content}>
                <p className={styles.event__title}>{title}</p>
                <p className={styles.event__body}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
