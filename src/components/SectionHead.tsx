import React from "react";
import styles from "@/styles/components/SectionHead.module.scss";
import { Libre_Caslon_Display } from "next/font/google";

const libre_caslon_display = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
});
type SectionHeadType = {
  head: string;
  subHead: string;
};

export default function SectionHead({ head, subHead }: SectionHeadType) {
  return (
    <div className={styles.head}>
      <div className={styles.element__container}>
        <p className={styles.element}>{subHead}</p>
      </div>
      <h1 className={`${libre_caslon_display.className} ${styles.title}`}>
        {head}
      </h1>
    </div>
  );
}
