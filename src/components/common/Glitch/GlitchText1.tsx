import styles from "./GlitchText1.module.css";

interface GlitchTextProps {
  text?: string;
}

const GlitchText1 = ({text = "GLITCH"}: GlitchTextProps) => {
  return (
    <div className={styles.glitchWrapper}>
      <div className={styles.glitch} data-text={text}>
        {text}
      </div>
    </div>
  );
};

export default GlitchText1;
