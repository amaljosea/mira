"use client";

import Header from "@/src/components/common/Header/Header";
import Footer from "@/src/components/common/Footer/Footer";
import Swap from "@/src/components/common/Swap/Swap";
import styles from "./SwapPageLayout.module.css";
import dino from "@/public/dino.png";
import {useState} from "react";
import clsx from "clsx";
import rainbow from "@/public/Rainbow.png";

const SwapPageLayout = () => {
  const [showDino, setShowDino] = useState(false);
  const [showRainbow, setShowRainbow] = useState(false);
  const [showRainbowImg, setRainbowImg] = useState(false);

  const handleDinoClick = () => {
    setShowDino(true);

    setTimeout(() => {
      setShowDino(false);
    }, 1000);
  };

  const handleRainbowClick = () => {
    if (showRainbow) {
      return;
    }
    setShowRainbow(true);
    // Remove the rainbow after fade-out animation completes
    setTimeout(() => {
      setShowRainbow(false);
    }, 7000);
  };
  const handleRainbowImageClick = () => {
    if (showRainbowImg) {
      return;
    }
    setRainbowImg(true);
    // Remove the rainbow after fade-out animation completes
    setTimeout(() => {
      setRainbowImg(false);
    }, 5000);
  };

  const Rainbow = () => {
    return (
      <>
        <div className={styles.rainbowContainer}>
          <div
            className={`${styles.rainbowColor} ${styles.rainbowColor1}`}
          ></div>
          <div
            className={`${styles.rainbowColor} ${styles.rainbowColor2}`}
          ></div>
          <div
            className={`${styles.rainbowColor} ${styles.rainbowColor3}`}
          ></div>
          <div
            className={`${styles.rainbowColor} ${styles.rainbowColor4}`}
          ></div>
          <div
            className={`${styles.rainbowColor} ${styles.rainbowColor5}`}
          ></div>
        </div>
        {/*  <div className={styles.hainText}>
          Easy there, Gordon Gecko. If you keep switching these prices, the
          market will tank.
        </div> */}
      </>
    );
  };

  const RainBowImage = () => {
    return (
      <div className={styles.rainbowImageWrapper}>
        <img className={styles.rainbowImage} src={rainbow.src} alt="Rainbow" />
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
        <button
          onClick={handleRainbowImageClick}
          className={styles.rainbowButtonImage}
        >
          🌈 Rainbow image
        </button>
        {showRainbow && <Rainbow />}
        {showRainbowImg && <RainBowImage />}
        <img
          src={dino.src}
          alt="Derek Dino"
          className={clsx(styles.dino, {[styles.visible]: showDino})}
          style={{left: "30%", width: "190px", height: "170px"}}
        />
      </main>

      <Footer />
    </div>
  );
};

export default SwapPageLayout;
