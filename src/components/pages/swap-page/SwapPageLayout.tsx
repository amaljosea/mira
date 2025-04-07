"use client";

import Header from "@/src/components/common/Header/Header";
import Footer from "@/src/components/common/Footer/Footer";
import Swap from "@/src/components/common/Swap/Swap";
import styles from "./SwapPageLayout.module.css";
import dino from "@/public/dino.png";
import {useState} from "react";
import clsx from "clsx";

const SwapPageLayout = () => {
  const [showDino, setShowDino] = useState(false);
  const [dinoPosition, setDinoPosition] = useState("50vw");
  const [showRainbow, setShowRainbow] = useState(false);

  const handleRainbowClick = () => {
    setShowRainbow(true);
    setTimeout(() => setShowRainbow(false), 5000);
  };

  const handleDinoClick = () => {
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setDinoPosition(`${randomLeft}vw`);
    setShowDino(true);

    setTimeout(() => {
      setShowDino(false);
    }, 3000);
  };

  const RainbowPortal = () => {
    return (
      <div className={styles.container}>
        <div className={`${styles.rainbowColor} ${styles.rainbowColor1}`}></div>
        <div className={`${styles.rainbowColor} ${styles.rainbowColor2}`}></div>
        <div className={`${styles.rainbowColor} ${styles.rainbowColor3}`}></div>
        <div className={`${styles.rainbowColor} ${styles.rainbowColor4}`}></div>
        <div className={`${styles.rainbowColor} ${styles.rainbowColor5}`}></div>
      </div>
    );
  };

  return (
    <div className={styles.swapPage}>
      <Header />
      <main className={styles.swapLayout}>
        <Swap />
        <button onClick={handleDinoClick} className={styles.dinoButton}>
          {showDino ? "There you go!" : "🦖 Summon Derek Dino"}
        </button>
        <button onClick={handleRainbowClick} className={styles.rainbowButton}>
          🌈 Unleash Rainbow
        </button>

        <img
          src={dino.src}
          alt="Derek Dino"
          className={clsx(styles.dino, {[styles.visible]: showDino})}
          style={{left: dinoPosition, width: "190px", height: "170px"}}
        />
        {showRainbow && <RainbowPortal />}
      </main>
      <Footer />
    </div>
  );
};

export default SwapPageLayout;
