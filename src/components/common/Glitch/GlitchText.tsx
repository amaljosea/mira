import styles from "./GlitchText.module.css";

interface GlitchTextProps {
  text?: string;
}

const GlitchText = ({text = "GLITCH"}: GlitchTextProps) => {
  return (
    <div className={styles.glitchWrapper}>
      <div className={styles.glitch} data-text={text}>
        {text}
      </div>
    </div>
  );
};

export default GlitchText;
