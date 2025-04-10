"use client";
import {useEffect, useState} from "react";
import styles from "./GlitchTearFullScreen.module.css";

const GlitchTearFullScreen = () => {
  const [tears, setTears] = useState<
    Array<{top: number; delay: number; color: string}>
  >([]);

  useEffect(() => {
    const generateTears = () => {
      const slices = [];
      for (let i = 0; i < 30; i++) {
        slices.push({
          top: Math.random() * 100,
          delay: Math.random() * 2,
          color: ["#0ff", "#f0f", "#f00", "#0f0", "#fff"][
            Math.floor(Math.random() * 5)
          ],
        });
      }
      setTears(slices);
    };

    generateTears();
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.scanlines}></div>
      {tears.map((slice, index) => (
        <div
          key={index}
          className={styles.slice}
          style={{
            top: `${slice.top}%`,
            animationDelay: `${slice.delay}s`,
            backgroundColor: slice.color,
            opacity: 0.05 + Math.random() * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default GlitchTearFullScreen;
