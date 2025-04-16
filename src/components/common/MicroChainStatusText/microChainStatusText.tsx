"use client";

import {motion, AnimatePresence} from "framer-motion";
import styles from "./MicroChainStatusText.module.css";
import {useAnimationStore} from "@/src/stores/useMiniGame";

import radioAudioSrc from "../../../../public/audio/radio-audio.mp3";

const SHOW_MENU = true;

const MicroChainStatusText = () => {
  const count = useAnimationStore((state) => state.animationCallCount);
  const hintText = useAnimationStore((state) => state.hintText);

  const play = () => {
    const play = () => {
      const audio = new Audio(radioAudioSrc);
      audio.volume = 0.7;
      audio.play().catch((e) => console.error("Audio error:", e));

      // Auto-stop after 3 seconds
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 3000);
    };

    return {play};
  };

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
        {/* <button
                    onClick={() => play()}
                >
                    audio
                </button> */}
        <button
          onClick={() => useAnimationStore.getState().triggerTextScrambler()}
        >
          scramble
        </button>
        <button
          onClick={() =>
            useAnimationStore
              .getState()
              .triggerClassAnimation("glitchLayer", 5000)
          }
        >
          glitch
        </button>
        <button
          onClick={() =>
            useAnimationStore
              .getState()
              .triggerClassAnimation("rainbowColor", 7000)
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
      <div className={`${styles.widget} ${count === 3 ? styles.green : ""}`}>
        <div style={{height: "50px", display: "flex", gap: "3px"}}>
          <span>[</span>

          {/* Animating Letters */}
          {count >= 1 &&
            "MIC".split("").map((char, index) => (
              <motion.span
                key={`anim-${char}-${index}`}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: index * 0.05}}
              >
                {char}
              </motion.span>
            ))}
          {count >= 2 &&
            "ROC".split("").map((char, index) => (
              <motion.span
                key={`anim-${char}-${index}`}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: index * 0.05}}
              >
                {char}
              </motion.span>
            ))}
          {count >= 3 &&
            "HAIN".split("").map((char, index) => (
              <motion.span
                key={`anim-${char}-${index}`}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: index * 0.05}}
              >
                {char}
              </motion.span>
            ))}

          {/* Remaining Underscores */}
          {Array.from(
            count === 0
              ? {length: 10}
              : count === 1
                ? {length: 7}
                : count === 2
                  ? {length: 4}
                  : {length: 0},
          ).map((_, index) => (
            <span key={`empty-${index}`} className={styles.emptyChar}>
              _
            </span>
          ))}
          <span>] </span>
          <span> </span>

          <AnimatePresence>
            {hintText && (
              <motion.span
                className={styles.hintText}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 2}}
              >
                Hint: {hintText}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {hintText && (
            <motion.span
              className={styles.hintTextSmall}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 2}}
            >
              Hint: {hintText}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MicroChainStatusText;
