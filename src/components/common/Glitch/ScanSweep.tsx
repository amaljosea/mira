"use client";
import React, {useEffect, useState} from "react";
import styles from "./ScanSweep.module.css";

const ScanSweep = ({
  trigger,
  onComplete,
}: {
  trigger: boolean;
  onComplete: () => void;
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (trigger) {
      setActive(true);
      const timeout = setTimeout(() => {
        setActive(false);
        onComplete(); // signal that sweep is done
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [trigger, onComplete]);

  if (!active) return null;

  return (
    <div className={styles.scanSweepWrapper}>
      <div className={styles.scanSweepLine} />
    </div>
  );
};

export default ScanSweep;
