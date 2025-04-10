"use client";

import {useState} from "react";
import Header from "@/src/components/common/Header/Header";
import Footer from "@/src/components/common/Footer/Footer";
import Swap from "@/src/components/common/Swap/Swap";
import styles from "./SwapPageLayout.module.css";
import ScanLines from "../../common/Glitch/ScanLines";
import ScanSweep from "../../common/Glitch/ScanSweep";
import ScanLinesOverlay from "../../common/Glitch/ScanLinesOverlay";
import GlitchText from "../../common/Glitch/GlitchText";
import GlitchText1 from "../../common/Glitch/GlitchText1";
import GlitchSwapWrapper from "../../common/Glitch/GlitchSwapWrapper";
import GlitchTearFullScreen from "../../common/Glitch/GlitchTearFullScreen";

const SwapPageLayout = () => {
  const [showScan1, setShowScan1] = useState(false);
  const [showScan2, setShowScan2] = useState(false);
  const [triggerSweep1, setTriggerSweep1] = useState(false);
  const [triggerSweep2, setTriggerSweep2] = useState(false);
  const [showGlitchText, setShowGlitchText] = useState(false);
  const [showGlitchText1, setShowGlitchText1] = useState(false);
  const [showGlitchSwap, setShowGlitchSwap] = useState(false);
  const [showTearing, setShowTearing] = useState(false);

  const triggerScanEffect = (type: "scan1" | "scan2") => {
    if (type === "scan1") {
      setShowScan1(true);
      setTriggerSweep1(true);
    } else {
      setShowScan2(true);
      setTriggerSweep2(true);
    }
  };

  const handleSweepComplete = (type: "scan1" | "scan2") => {
    if (type === "scan1") {
      setShowScan1(false);
      setTriggerSweep1(false);
    } else {
      setShowScan2(false);
      setTriggerSweep2(false);
    }
  };

  if (showGlitchSwap) {
    return (
      <GlitchSwapWrapper>
        <div className={styles.swapPage}>
          <Header />
          <main className={styles.swapLayout}>
            <Swap />
          </main>
          <Footer />
        </div>
      </GlitchSwapWrapper>
    );
  } else {
    return (
      <div className={styles.swapPage}>
        <Header />
        <main className={styles.swapLayout}>
          <button
            onClick={() => triggerScanEffect("scan1")}
            style={buttonStyle(20)}
          >
            Trigger Scanlines 1
          </button>

          <button
            onClick={() => triggerScanEffect("scan2")}
            style={buttonStyle(60)}
          >
            Trigger Scanlines 2
          </button>

          <button
            onClick={() => setShowGlitchText(!showGlitchText)}
            style={buttonStyle(100, "#f0f")}
          >
            {showGlitchText ? "Hide" : "Show"} Glitch Text
          </button>

          <button
            onClick={() => setShowGlitchText1(!showGlitchText1)}
            style={buttonStyle(140, "#f0f")}
          >
            {showGlitchText1 ? "Hide" : "Show"} Glitch Text 1
          </button>

          <button
            onClick={() => {
              setShowGlitchSwap(true);
              setTimeout(() => setShowGlitchSwap(false), 2500);
            }}
            style={buttonStyle(180, "#0ff")}
          >
            Trigger Glitch Swap
          </button>

          <button
            onClick={() => setShowTearing(!showTearing)}
            style={buttonStyle(220, "#0ff")}
          >
            {showTearing ? "Hide" : "Show"} Fullscreen Tear
          </button>

          <Swap />
        </main>

        <Footer />

        {showTearing && <GlitchTearFullScreen />}
        {showScan1 && <ScanLines />}
        {showScan2 && <ScanLinesOverlay />}
        {showGlitchText && <GlitchText />}
        {showGlitchText1 && <GlitchText1 />}

        <ScanSweep
          trigger={triggerSweep1}
          onComplete={() => handleSweepComplete("scan1")}
        />
        <ScanSweep
          trigger={triggerSweep2}
          onComplete={() => handleSweepComplete("scan2")}
        />
      </div>
    );
  }
};

const buttonStyle = (top: number, color: string = "#0f0") => ({
  position: "fixed",
  top,
  right: 20,
  zIndex: 10000,
  padding: "8px 12px",
  backgroundColor: "#000",
  color: color,
  border: `1px solid ${color}`,
  fontFamily: "monospace",
  cursor: "pointer",
  marginBottom: 12,
});

export default SwapPageLayout;
