"use client";

import {motion, AnimatePresence} from "framer-motion";
import styles from "./MicroChainStatusText.module.css";
import {useAnimationStore} from "@/src/stores/useMiniGame";
import IconButton from "../IconButton/IconButton";
import {useEffect, useState} from "react";

const SHOW_MENU = false;

const MicroChainStatusText = () => {
  const count = useAnimationStore((state) => state.animationCallCount);
  const hintText = useAnimationStore((state) => state.hintText);
  const isRadioPlaying = useAnimationStore((state) => state.isRadioPlaying);

  const [shouldBlink, setShouldBlink] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (count > 0) {
      const lettersCount = count === 3 ? 4 : 3;
      const totalDelay = (lettersCount - 1) * 0.3 * 1000 + 1000; // <- Important change

      const timeout = setTimeout(() => {
        setShouldBlink(true);
        setTimeout(() => {
          setShouldBlink(false);
        }, 4000);
      }, totalDelay);

      return () => clearTimeout(timeout);
    }
  }, [count]);

  const animateText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={`anim-${text}-${char}-${index}`}
        initial={{opacity: 0, scale: 2.5, y: -20}}
        animate={{opacity: 1, scale: 1, y: 0}}
        transition={{
          delay: index * 0.3,
          duration: 1,
          ease: "easeOut",
        }}
        style={{display: "inline-block"}}
      >
        {char}
      </motion.span>
    ));
  };

  const length = count === 0 ? 10 : count === 1 ? 7 : count === 2 ? 4 : 0;

  if (!hasMounted) {
    return (
      <div className={styles.widget}>
        {/* Render fallback with only underscores to match server */}
        <div style={{display: "flex", gap: "3px"}}>
          <span>[</span>
          {Array.from({length: 10}).map((_, index) => (
            <span key={`empty-${index}`} className={styles.emptyChar}>
              _
            </span>
          ))}
          <span>]</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "1000",
          display: SHOW_MENU ? "block" : "none",
        }}
      >
        <button onClick={() => useAnimationStore.getState().playRadioAudio()}>
          audio
        </button>
        <button
          onClick={() => useAnimationStore.getState().triggerTextScrambler()}
        >
          scramble
        </button>
        <button
          onClick={() => useAnimationStore.getState().triggerTextGlitch()}
        >
          glitch
        </button>
        <button
          onClick={() =>
            useAnimationStore
              .getState()
              .triggerClassAnimation("rainbowColor", 3500)
          }
        >
          rainbow
        </button>
        <button
          onClick={() =>
            useAnimationStore.getState().triggerClassAnimation("dino", 2000)
          }
        >
          dino
        </button>
        <button
          onClick={() =>
            useAnimationStore.getState().handleMagicTripleClickToken()
          }
        >
          Token Trigger
        </button>
        <button
          onClick={() => useAnimationStore.getState().handleMagicInput("19.85")}
        >
          19.85 Trigger
        </button>
        <button
          onClick={() =>
            useAnimationStore.getState().handleMagicTripleClickCurrency()
          }
        >
          Currency Trigger
        </button>
        <button
          onClick={() => useAnimationStore.getState().resetAnimationCalls()}
        >
          reset
        </button>
      </div>
      <div className={`${styles.widget}`}>
        <div
          style={{display: "flex", gap: "3px"}}
          className={`${shouldBlink ? styles.briefGreenGlow : ""} ${count >= 3 ? styles.briefGreenGlowGreenEnd : ""}`}
        >
          <span>[</span>

          {count >= 1 && animateText("MIC")}
          {count >= 2 && animateText("ROC")}
          {count >= 3 && animateText("HAIN")}

          {/* Remaining Underscores */}
          {Array.from({length}).map((_, index) => (
            <span key={`empty-${index}`} className={styles.emptyChar}>
              _
            </span>
          ))}
          <span>]</span>
          {isRadioPlaying && (
            <div>
              <IconButton
                onClick={() => useAnimationStore.getState().stopRadioAudio()}
                className={styles.muteButton}
              >
                <img
                  src="/images/Sound.gif"
                  alt="Speaker Playing"
                  width={24}
                  height={24}
                />
              </IconButton>
            </div>
          )}
        </div>
        <AnimatePresence>
          {hintText && (
            <motion.p
              className={styles.hintText}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 2}}
            >
              Hint: {hintText}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MicroChainStatusText;
