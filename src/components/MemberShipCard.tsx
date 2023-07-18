import React from "react";
import styles from "@/styles/components/MemberShipCard.module.scss";
import Image from "next/image";
import img1 from "/public/member/pricing-1.jpg";
type MemberShipCardType = {
  popular: boolean;
  headTitle: string;
  price: string;
};
export default function MemberShipCard({
  popular,
  headTitle,
  price,
}: MemberShipCardType) {
  return (
    <div className={styles.card}>
      {popular && (
        <div className={styles.promo}>
          <svg width="27" height="28" viewBox="0 0 27 28" fill="none">
            <path
              d="M13.5412 0.494507L14.6922 8.99311L19.4165 1.83551L16.7661 9.99186L24.1282 5.59291L18.2013 11.7915L26.7429 11.0225L18.7135 14.0357L26.7429 17.0489L18.2013 16.2799L24.1282 22.4785L16.7661 18.0796L19.4165 26.2359L14.6922 19.0783L13.5412 27.5769L12.3903 19.0783L7.6659 26.2359L10.3163 18.0796L2.95427 22.4785L8.88114 16.2799L0.339506 17.0489L8.36893 14.0357L0.339506 11.0225L8.88114 11.7915L2.95427 5.59291L10.3163 9.99186L7.6659 1.83551L12.3903 8.99311L13.5412 0.494507Z"
              fill="#017518"
            ></path>
          </svg>
          <p className={styles.promo__text}>Most Popular</p>
        </div>
      )}
      <div className={styles.card__head}>
        <p className={styles.head__title}>{headTitle}</p>
        <Image
          src={img1}
          alt="regular img"
          className={styles.card__img}
          priority
        />
      </div>
      <div className={styles.pricing}>Rs. {price} / month</div>
      <div className={styles.benifits__list}>
        <div className={styles.list}>
          <svg
            width="29"
            height="22"
            viewBox="0 0 29 22"
            fill="none"
            className={styles.check__icon}
          >
            <path
              d="M3 9.72308L11.1385 17.8615L26 3"
              stroke="#017518"
              strokeWidth="5.66154"
            ></path>
          </svg>
          <p className={styles.list__item}>Choose any color</p>
        </div>
        <div className={styles.list}>
          <svg
            width="29"
            height="22"
            viewBox="0 0 29 22"
            fill="none"
            className={styles.check__icon}
          >
            <path
              d="M3 9.72308L11.1385 17.8615L26 3"
              stroke="#017518"
              strokeWidth="5.66154"
            ></path>
          </svg>
          <p className={styles.list__item}>Choose any color</p>
        </div>
        <div className={styles.list}>
          <svg
            width="29"
            height="22"
            viewBox="0 0 29 22"
            fill="none"
            className={styles.check__icon}
          >
            <path
              d="M3 9.72308L11.1385 17.8615L26 3"
              stroke="#017518"
              strokeWidth="5.66154"
            ></path>
          </svg>
          <p className={styles.list__item}>Choose any color</p>
        </div>
        <div className={`primary__button ${styles.sub__btn}`}>Subscribe</div>
      </div>
    </div>
  );
}
