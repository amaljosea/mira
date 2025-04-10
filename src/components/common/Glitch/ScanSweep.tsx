"use client";
import React, {useEffect, useState} from "react";
import styles from "./ScanSweep.module.css";

const ScanSweep = ({trigger}: {trigger: boolean}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (trigger) {
      setActive(true);
      const timeout = setTimeout(() => setActive(false), 2500); // updated from 1000
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  if (!active) return null;

  return (
    <div className={styles.scanSweepWrapper}>
      <div className={styles.scanSweepLine} />
    </div>
  );
};

export default ScanSweep;
