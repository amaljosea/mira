"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './MicroChainStatusText.module.css';

const stageTexts = ['MIC', 'MICROC', 'MICROCHAIN'];

const MicroChainStatusText = () => {
    const [displayText, setDisplayText] = useState('');
    const [prevText, setPrevText] = useState('');
    const [stage, setStage] = useState(0);

    useEffect(() => {
        let nextText = '';
        if (stage >= 1 && stage <= 3) {
            nextText = stageTexts[stage - 1];
        } else if (stage === 4) {
            nextText = 'MICROCHAIN';
        }
        setPrevText(displayText);
        setDisplayText(nextText);
    }, [stage]);

    const staticText = displayText.slice(0, prevText.length);
    const animatedText = displayText.slice(prevText.length);

    return (
        <div className={`${styles.widget} ${stage === 4 && displayText === 'MICROCHAIN' ? styles.green : ''}`}>
            <div style={{ marginBottom: "16px" }}>
                <button className="incrementButton" onClick={() => setStage((stage + 1) % 5)}>CLICK</button>
            </div>

            <div style={{ height: "50px", display: "flex", gap: "3px" }}>
                <span>[</span>
                {/* Revealed Letters */}
                {staticText.split('').map((char, index) => (
                    <span key={`static-${char}-${index}`}>{char}</span>
                ))}

                {/* Animating Letters */}
                {animatedText.split('').map((char, index) => (
                    <motion.span
                        key={`anim-${char}-${index}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        {char}
                    </motion.span>
                ))}

                {/* Remaining Underscores */}
                {Array.from({ length: 'MICROCHAIN'.length - displayText.length }).map((_, index) => (
                    <span
                        key={`empty-${index}`}
                        className={styles.emptyChar}
                    >
                        _
                    </span>
                ))}
                <span>]</span>
            </div>
        </div>
    );
};

export default MicroChainStatusText;
