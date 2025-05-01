import {create} from "zustand";
import {subscribeWithSelector} from "zustand/middleware";
import {playAudioEffect, stopCurrentAudio} from "../utils/playAudioEffect";

const HINT_1 = "Rwrarrw, careful how fast you switch those assets!";
const HINT_2 = "Slippage is so low these days, it feels great to live in 1985.";
const HINT_3 =
  "Easy there, Gordon Gecko. If you keep switching these prices, the market will tank.";

type AnimationTrigger = () => void;
type AnimationType =
  | "timer"
  | "tripleClickToken"
  | "magicNumber"
  | "tripleClickCurrency"
  | "globalAnimation";

interface AnimationState {
  masterEnabled: boolean;
  toggles: Record<AnimationType, boolean>;
  subscribers: AnimationTrigger[];
  inputBuffer: string;
  lastClicks: number[];
  intervalId: NodeJS.Timeout | null;
  isGlobalActive: boolean;
  calledAnimations: {
    tripleClickTokenSwap: boolean;
    magicInput: boolean;
    tripleClickCurrencySwap: boolean;
  };
  animationCallCount: number;
  isTriggeredManually: boolean;
  hintText: string;
  delayedTestTimeout: NodeJS.Timeout | null;
  delayedTestStartTime: number | null;
  delayedTestRemaining: number | null;
  isRadioPlaying: boolean;

  subscribe: (callback: AnimationTrigger) => () => void;
  triggerAnimations: () => void;
  getAnimationCallCount: () => number;
  handleMagicTripleClickToken: () => void;
  handleMagicInput: (value: string) => void;
  handleMagicTripleClickCurrency: () => void;
  resetAnimationCalls: () => void;

  startPeriodicGlobalAnimation: () => void;
  stopPeriodicGlobalAnimation: () => void;
  triggerClassAnimation: (classname: string, duration: number) => void;
  handleVisibilityChange: () => void;
  initializeGlobalAnimation: () => () => void;
  triggerTextScrambler: () => void;
  playRadioAudio: () => void;
  stopRadioAudio: () => void;
  triggerTextGlitch: () => void;
  triggerScanAndSweep: () => void;
  initializeHintListener: (count?: number) => () => void;
}

// Local storage keys
const ANIMATION_CALLS_KEY = "animation-calls";
const ANIMATION_COUNT_KEY = "animation-count";

export const useAnimationStore = create<AnimationState>()(
  subscribeWithSelector((set, get) => ({
    masterEnabled: process.env.NEXT_PUBLIC_MINIGAME_MASTER === "true",
    toggles: {
      timer: true,
      tripleClickToken: true,
      magicNumber: true,
      tripleClickCurrency: true,
      globalAnimation: true,
    },
    subscribers: [],
    inputBuffer: "",
    lastClicks: [],
    intervalId: null,
    isGlobalActive: false,
    calledAnimations:
      typeof window !== "undefined"
        ? JSON.parse(
            localStorage.getItem(ANIMATION_CALLS_KEY) ||
              '{"tripleClickTokenSwap":false,"magicInput":false,"tripleClickCurrencySwap":false}',
          )
        : {
            tripleClickTokenSwap: false,
            magicInput: false,
            tripleClickCurrencySwap: false,
          },
    animationCallCount:
      typeof window !== "undefined"
        ? parseInt(localStorage.getItem(ANIMATION_COUNT_KEY) || "0")
        : 0,

    isTriggeredManually: false,
    hintText: "",
    delayedTestTimeout: null,
    delayedTestStartTime: null,
    delayedTestRemaining: null,

    subscribe: (callback) => {
      set((state) => ({subscribers: [...state.subscribers, callback]}));
      return () =>
        set((state) => ({
          subscribers: state.subscribers.filter((cb) => cb !== callback),
        }));
    },

    isRadioPlaying: false,

    playRadioAudio: () => {
      playAudioEffect("/audio/radio-audio.mp3", {
        volume: 0.7,
        maxDuration: 8000,
        onStart: () => set({isRadioPlaying: true}),
        onEnd: () => {
          set({isRadioPlaying: false});
        },
      });
    },

    stopRadioAudio: () => {
      stopCurrentAudio();
      set({isRadioPlaying: false});
    },

    triggerAnimations: () => {
      if (!get().masterEnabled) return;
      get().subscribers.forEach((cb) => cb());
    },

    getAnimationCallCount: () => {
      return get().animationCallCount;
    },

    handleMagicTripleClickToken: () => {
      const {
        masterEnabled,
        toggles,
        lastClicks,
        calledAnimations,
        animationCallCount,
        initializeHintListener,
      } = get();
      if (
        !masterEnabled ||
        !toggles.tripleClickToken ||
        calledAnimations.tripleClickTokenSwap ||
        animationCallCount !== 0
      )
        return;

      const now = Date.now();
      const recentClicks = lastClicks.filter((t) => now - t < 1000);

      if (recentClicks.length >= 2) {
        set({lastClicks: []});

        const animationSubscriber = () => {
          get().triggerTextScrambler();
          get().subscribers = get().subscribers.filter(
            (sub) => sub !== animationSubscriber,
          );
        };

        // Update call tracking
        const newCalledAnimations = {
          ...calledAnimations,
          tripleClickTokenSwap: true,
        };
        const newCount = animationCallCount + 1;

        get().subscribers.push(animationSubscriber);
        get().triggerAnimations();

        setTimeout(() => {
          set({
            calledAnimations: newCalledAnimations,
            animationCallCount: newCount,
            isTriggeredManually: true,
          });
          initializeHintListener(newCount);

          if (typeof window !== "undefined") {
            localStorage.setItem(
              ANIMATION_CALLS_KEY,
              JSON.stringify(newCalledAnimations),
            );
            localStorage.setItem(ANIMATION_COUNT_KEY, newCount.toString());
          }
        }, 3500);
      } else {
        set({lastClicks: [...recentClicks, now]});
      }
    },

    handleMagicInput: (value: string) => {
      const {
        masterEnabled,
        toggles,
        inputBuffer,
        calledAnimations,
        animationCallCount,
        initializeHintListener,
        playRadioAudio,
      } = get();
      if (
        !masterEnabled ||
        !toggles.magicNumber ||
        calledAnimations.magicInput ||
        animationCallCount !== 1
      )
        return;

      const newBuffer = (inputBuffer + value).slice(-5).replace(/[^0-9.]/g, "");
      set({inputBuffer: newBuffer});

      if (newBuffer === "19.85") {
        const magicNumberSubscriber = () => {
          get().triggerTextGlitch();
          playRadioAudio();
          set((state) => ({
            subscribers: state.subscribers.filter(
              (sub) => sub !== magicNumberSubscriber,
            ),
          }));
        };

        // set calledAnimations now, but NOT animationCallCount
        const newCalledAnimations = {...calledAnimations, magicInput: true};

        set({inputBuffer: ""});

        set((state) => ({
          subscribers: [...state.subscribers, magicNumberSubscriber],
        }));

        get().triggerAnimations();

        const newCount = animationCallCount + 1;

        const waitForRadioToStop = () => {
          const checkInterval = 500; // check every 500ms

          const intervalId = setInterval(() => {
            if (!get().isRadioPlaying) {
              clearInterval(intervalId);

              set({
                calledAnimations: newCalledAnimations,
                animationCallCount: newCount,
                isTriggeredManually: true,
              });

              initializeHintListener(newCount);

              if (typeof window !== "undefined") {
                localStorage.setItem(
                  ANIMATION_CALLS_KEY,
                  JSON.stringify(newCalledAnimations),
                );
                localStorage.setItem(ANIMATION_COUNT_KEY, newCount.toString());
              }
            }
          }, checkInterval);
        };

        // start after 4.5s delay (same as before)
        setTimeout(() => {
          waitForRadioToStop();
        }, 4500);
      }
    },

    handleMagicTripleClickCurrency: () => {
      const {
        masterEnabled,
        toggles,
        lastClicks,
        calledAnimations,
        animationCallCount,
        initializeHintListener,
      } = get();
      if (
        !masterEnabled ||
        !toggles.tripleClickCurrency ||
        calledAnimations.tripleClickCurrencySwap ||
        animationCallCount !== 2
      )
        return;

      const now = Date.now();
      const recentClicks = lastClicks.filter((t) => now - t < 1000);

      if (recentClicks.length >= 2) {
        set({lastClicks: []});

        const animationSubscriber = () => {
          get().triggerClassAnimation("rainbowColor", 3500);
          get().subscribers = get().subscribers.filter(
            (sub) => sub !== animationSubscriber,
          );
        };

        // Update call tracking
        const newCalledAnimations = {
          ...calledAnimations,
          tripleClickCurrencySwap: true,
        };
        const newCount = animationCallCount + 1;

        get().subscribers.push(animationSubscriber);
        get().triggerAnimations();

        setTimeout(() => {
          set({
            calledAnimations: newCalledAnimations,
            animationCallCount: newCount,
            isTriggeredManually: true,
          });
          initializeHintListener(newCount);
          if (typeof window !== "undefined") {
            localStorage.setItem(
              ANIMATION_CALLS_KEY,
              JSON.stringify(newCalledAnimations),
            );
            localStorage.setItem(ANIMATION_COUNT_KEY, newCount.toString());
          }
        }, 4500);
      } else {
        set({lastClicks: [...recentClicks, now]});
      }
    },

    resetAnimationCalls: () => {
      const defaultCalled = {
        tripleClickTokenSwap: false,
        magicInput: false,
        tripleClickCurrencySwap: false,
      };
      set({
        calledAnimations: defaultCalled,
        animationCallCount: 0,
        hintText: "",
        isTriggeredManually: false,
      });

      if (typeof window !== "undefined") {
        localStorage.setItem(
          ANIMATION_CALLS_KEY,
          JSON.stringify(defaultCalled),
        );
        localStorage.setItem(ANIMATION_COUNT_KEY, "0");
      }
    },

    startPeriodicGlobalAnimation: () => {
      const {masterEnabled, toggles} = get();
      if (!masterEnabled || !toggles.globalAnimation) return;

      let isGlitchNext = true;

      const intervalId = setInterval(() => {
        const currentCount = get().animationCallCount;

        // Stop the animation after 3 total animation calls
        if (currentCount === 3) {
          get().stopPeriodicGlobalAnimation();
          return;
        }

        if (isGlitchNext) {
          get().triggerTextGlitch();
        } else {
          get().triggerClassAnimation("dino", 2000);
        }
        isGlitchNext = !isGlitchNext;
      }, 30000); // 30 second interval

      set({intervalId, isGlobalActive: true});
    },

    stopPeriodicGlobalAnimation: () => {
      const {intervalId} = get();
      if (intervalId) {
        clearInterval(intervalId);
        set({intervalId: null, isGlobalActive: false});
      }
    },

    handleVisibilityChange: () => {
      if (document.visibilityState === "visible") {
        get().startPeriodicGlobalAnimation();
      } else {
        get().stopPeriodicGlobalAnimation();
      }
    },

    initializeGlobalAnimation: () => {
      if (typeof window === "undefined") return () => {};

      const store = get();
      const hintListenerCleanup = store.initializeHintListener(
        store.animationCallCount,
      );
      store.startPeriodicGlobalAnimation();

      const visibilityHandler = () => store.handleVisibilityChange();
      document.addEventListener("visibilitychange", visibilityHandler);

      return () => {
        hintListenerCleanup();
        store.stopPeriodicGlobalAnimation();
        document.removeEventListener("visibilitychange", visibilityHandler);
      };
    },

    triggerClassAnimation: (classname: string, duration: number) => {
      if (typeof window === "undefined") return;
      const glitchElements = document.querySelectorAll(`.${classname}`);
      glitchElements.forEach((el) => {
        (el as HTMLElement).style.display = "block";
      });

      const timeoutId = setTimeout(() => {
        glitchElements.forEach((el) => {
          (el as HTMLElement).style.display = "none";
        });
      }, duration);

      return () => clearTimeout(timeoutId);
    },

    triggerTextGlitch: () => {
      const styleId = "glitch-style";
      if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.innerHTML = `
          @keyframes glitch {
            0% { transform: translate(0); }
            10% { transform: translate(-2px, 2px); }
            20% { transform: translate(2px, -2px); }
            30% { transform: translate(-1px, 1px); }
            40% { transform: translate(1px, -1px); }
            50% { transform: translate(0); }
            100% { transform: translate(0); }
          }
    
          .glitchy {
            animation: glitch 120ms infinite;
          }
    
          img.glitchy,
          svg.glitchy,
          table.glitchy,
          input.glitchy,
          textarea.glitchy,
          [class^="SearchBar_searchBar__"].glitchy {
            animation: glitch 200ms infinite;
            filter: brightness(1.2) contrast(1.1);
          }
        `;
        document.head.appendChild(style);
      }

      const elements = Array.from(
        document.querySelectorAll<HTMLElement>("body *"),
      );
      const glitchedElements: HTMLElement[] = [];

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const childNodes = Array.from(el.childNodes);
        let hasVisibleText = false;

        for (const node of childNodes) {
          if (
            node.nodeType === Node.TEXT_NODE &&
            node.textContent?.trim().length
          ) {
            hasVisibleText = true;
            break;
          }
        }

        const tagName = el.tagName.toLowerCase();
        const className = el.className?.toString() || "";

        const isImage = tagName === "img";
        const isTextSpan = tagName === "span" && el.textContent?.trim().length;
        const isSvg = tagName === "svg";
        const isTable = tagName === "table";
        const isInput = tagName === "input" || tagName === "textarea";
        const isSearchBar = /^SearchBar_searchBar__/.test(className);

        if (
          hasVisibleText ||
          isImage ||
          isTextSpan ||
          isSvg ||
          isTable ||
          isInput ||
          isSearchBar
        ) {
          el.classList.add("glitchy");
          glitchedElements.push(el);
        }
      });

      // Trigger scan and sweep 500ms before glitch effect ends (1500ms)
      setTimeout(() => {
        get().triggerScanAndSweep();
      }, 1500);

      // Auto-remove glitch after 2 seconds
      setTimeout(() => {
        glitchedElements.forEach((el) => el.classList.remove("glitchy"));
      }, 2000);
    },

    triggerScanAndSweep: () => {
      // Clean up previous instance
      document.querySelector("#crt-style")?.remove();
      document.querySelector("#crt-sweep")?.remove();
      document.body.classList.remove("scanlines");

      // Inject CRT scanline styles
      const style = document.createElement("style");
      style.id = "crt-style";
      style.innerHTML = `
          @keyframes scanline-move {
              0%   { top: -100%; }
              100% { top: 100%; }
          }
  
          @keyframes static-scanlines {
              0% { background-position: 0 0; }
              100% { background-position: 0 4px; }
          }
  
          .scanlines {
              position: relative !important;
          }
  
          .scanlines::before,
          .scanlines::after {
              content: '';
              position: fixed;
              left: 0;
              width: 100vw;
              height: 100vh;
              pointer-events: none;
              z-index: 999999;
          }
  
          /* Moving scanline (sweeping) */
          .scanlines::before {
              background: linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
              animation: scanline-move 1s linear infinite;
              opacity: 0.4;
          }
  
          /* Static scanlines */
          .scanlines::after {
              top: 0;
              background-image: repeating-linear-gradient(
                  to bottom,
                  rgba(0,0,0,0.35),
                  rgba(0,0,0,0.35) 2px,
                  transparent 2px,
                  transparent 4px
              );
              animation: static-scanlines 0.25s steps(60) infinite;
              mix-blend-mode: multiply;
          }
      `;
      document.head.appendChild(style);

      // Apply effect
      document.body.classList.add("scanlines");

      // Stop the scanline effect after 2 seconds and clean everything up
      setTimeout(() => {
        // Stop the scanline animations
        const newStyle = document.createElement("style");
        newStyle.id = "crt-sweep";
        newStyle.innerHTML = `
              .scanlines::before {
                  animation: none !important;
              }
              .scanlines::after {
                  animation: none !important;
                  background: none !important;
              }
          `;
        document.head.appendChild(newStyle);

        // Clean up everything after stopping the effect
        document.querySelector("#crt-style")?.remove();
        document.querySelector("#crt-sweep")?.remove();
        document.body.classList.remove("scanlines");
      }, 2000);
    },

    triggerTextScrambler: () => {
      const endTime = Date.now() + 1500;
      const originalText = new Map<Text, string>();

      // Add overlay to block interaction
      const blocker = document.createElement("div");
      blocker.style.position = "fixed";
      blocker.style.top = "0";
      blocker.style.left = "0";
      blocker.style.width = "100vw";
      blocker.style.height = "100vh";
      blocker.style.zIndex = "999999";
      blocker.style.background = "transparent";
      blocker.style.pointerEvents = "auto";
      document.body.appendChild(blocker);

      function scrambleNode(node: Node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const textNode = node as Text;
          const text = textNode.nodeValue || "";

          if (text.trim() !== "") {
            if (!originalText.has(textNode)) {
              originalText.set(textNode, text);
            }

            textNode.nodeValue = text
              .split("")
              .map((char) =>
                Math.random() > 0.5
                  ? String.fromCharCode(Math.floor(Math.random() * 94 + 33))
                  : char,
              )
              .join("");
          }
        }
      }

      function walkDOM(element: Element | DocumentFragment) {
        element.childNodes.forEach((child) => {
          scrambleNode(child);
          if (child.nodeType === Node.ELEMENT_NODE) {
            walkDOM(child as Element);
          }
        });
      }

      const interval = setInterval(() => {
        walkDOM(document.body);

        if (Date.now() >= endTime) {
          originalText.forEach((original, node) => {
            const currentText = node.nodeValue || "";
            const chars = currentText.split("");
            const originalChars = original.split("");

            chars.forEach((_, index) => {
              setTimeout(() => {
                chars[index] = originalChars[index];
                node.nodeValue = chars.join("");
              }, Math.random() * 100);
            });
          });

          clearInterval(interval);

          // Remove the click-blocking overlay after max delay
          setTimeout(() => {
            blocker.remove();
          }, 1500); // Wait for all text to finish restoring
        }
      }, 50);
    },

    initializeHintListener: (count?: number) => {
      const store = get();

      set({hintText: ""});

      if (store.delayedTestTimeout) {
        clearTimeout(store.delayedTestTimeout);
      }

      const updateHintText = () => {
        console.log("5 minutes have passed!");
        if (count === 0) set({hintText: HINT_1});
        if (count === 1) set({hintText: HINT_2});
        if (count === 2) set({hintText: HINT_3});
        if (count === 3) set({hintText: ""});
      };

      const startTimer = () => {
        // const delay = 5 * 60 * 1000; // 5 minutes
        const delay = count === 0 ? 15 * 1000 : 8 * 1000; // 10 seconds
        set({
          delayedTestStartTime: Date.now(),
          delayedTestRemaining: delay,
        });

        const timeoutId = setTimeout(() => {
          updateHintText();
          set({
            delayedTestTimeout: null,
            delayedTestStartTime: null,
            delayedTestRemaining: null,
          });
        }, delay);

        set({delayedTestTimeout: timeoutId});
      };
      const pauseTimer = () => {
        const {delayedTestTimeout, delayedTestStartTime} = get();
        if (delayedTestTimeout && delayedTestStartTime) {
          clearTimeout(delayedTestTimeout);
          const elapsed = Date.now() - delayedTestStartTime;
          set({
            delayedTestTimeout: null,
            delayedTestRemaining: 5 * 60 * 1000 - elapsed,
          });
        }
      };

      const resumeTimer = () => {
        const {delayedTestRemaining} = get();
        if (delayedTestRemaining) {
          const timeoutId = setTimeout(() => {
            updateHintText();
            set({
              delayedTestTimeout: null,
              delayedTestStartTime: null,
              delayedTestRemaining: null,
            });
          }, delayedTestRemaining);

          set({
            delayedTestTimeout: timeoutId,
            delayedTestStartTime: Date.now(),
          });
        }
      };

      const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          resumeTimer();
          store.handleVisibilityChange();
        } else {
          pauseTimer();
          store.handleVisibilityChange();
        }
      };

      // Initialize
      startTimer();
      window.addEventListener("visibilitychange", handleVisibilityChange);

      // Cleanup function
      return () => {
        const {delayedTestTimeout} = get();
        if (delayedTestTimeout) {
          clearTimeout(delayedTestTimeout);
        }
        window.removeEventListener("visibilitychange", handleVisibilityChange);
        set({
          delayedTestTimeout: null,
          delayedTestStartTime: null,
          delayedTestRemaining: null,
        });
      };
    },
  })),
);

if (typeof window !== "undefined") {
  const globalAnimationCleanup = useAnimationStore
    .getState()
    .initializeGlobalAnimation();
  window.addEventListener("beforeunload", globalAnimationCleanup);
}
