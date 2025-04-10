// GlitchSwapWrapper.tsx
"use client";
import {ReactNode} from "react";
import styles from "./GlitchSwapWrapper.module.css";

const GlitchSwapWrapper = ({children}: {children: ReactNode}) => {
  return (
    <div className={styles.glitchContainer} data-text="">
      {children}
      <div className={styles.glitchLayer1}>{children}</div>
      <div className={styles.glitchLayer2}>{children}</div>
    </div>
  );
};

export default GlitchSwapWrapper;
