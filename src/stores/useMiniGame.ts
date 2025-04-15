import {create} from "zustand";
import {subscribeWithSelector} from "zustand/middleware";
import {TextScramble} from "../utils/textScrambler";
// import radioAudioSrc from "../../public/audio/radio-audio.mp3";

type AnimationTrigger = () => void;
type AnimationType =
  | "timer"
  | "tripleClick"
  | "magicNumber"
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
  // playRadioAudio: () => void;
}

// Local storage keys
const ANIMATION_CALLS_KEY = "animation-calls";
const ANIMATION_COUNT_KEY = "animation-count";

export const useAnimationStore = create<AnimationState>()(
  subscribeWithSelector((set, get) => ({
    masterEnabled: process.env.NEXT_PUBLIC_MINIGAME_MASTER === "true",
    toggles: {
      timer: true,
      tripleClick: true,
      magicNumber: true,
      globalAnimation: true,
    },
    subscribers: [],
    inputBuffer: "",
    lastClicks: [],
    intervalId: null,
    isGlobalActive: false,
    // Initialize from localStorage if available
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

    subscribe: (callback) => {
      set((state) => ({subscribers: [...state.subscribers, callback]}));
      return () =>
        set((state) => ({
          subscribers: state.subscribers.filter((cb) => cb !== callback),
        }));
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
      } = get();
      if (
        !masterEnabled ||
        !toggles.tripleClick ||
        calledAnimations.tripleClickTokenSwap ||
        animationCallCount >= 3
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

        set({
          calledAnimations: newCalledAnimations,
          animationCallCount: newCount,
        });

        if (typeof window !== "undefined") {
          localStorage.setItem(
            ANIMATION_CALLS_KEY,
            JSON.stringify(newCalledAnimations),
          );
          localStorage.setItem(ANIMATION_COUNT_KEY, newCount.toString());
        }

        get().subscribers.push(animationSubscriber);
        get().triggerAnimations();
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
      } = get();
      if (
        !masterEnabled ||
        !toggles.magicNumber ||
        calledAnimations.magicInput ||
        animationCallCount >= 3
      )
        return;

      const newBuffer = (inputBuffer + value).slice(-5).replace(/[^0-9.]/g, "");
      set({inputBuffer: newBuffer});

      if (newBuffer === "19.85") {
        const magicNumberSubscriber = () => {
          get().triggerClassAnimation("glitchLayer", 5000);
          // get().playRadioAudio();
          set((state) => ({
            subscribers: state.subscribers.filter(
              (sub) => sub !== magicNumberSubscriber,
            ),
          }));
        };

        // Update call tracking
        const newCalledAnimations = {...calledAnimations, magicInput: true};
        const newCount = animationCallCount + 1;

        set({
          calledAnimations: newCalledAnimations,
          animationCallCount: newCount,
          inputBuffer: "",
        });

        if (typeof window !== "undefined") {
          localStorage.setItem(
            ANIMATION_CALLS_KEY,
            JSON.stringify(newCalledAnimations),
          );
          localStorage.setItem(ANIMATION_COUNT_KEY, newCount.toString());
        }

        set((state) => ({
          subscribers: [...state.subscribers, magicNumberSubscriber],
        }));
        get().triggerAnimations();
      }
    },

    handleMagicTripleClickCurrency: () => {
      const {
        masterEnabled,
        toggles,
        lastClicks,
        calledAnimations,
        animationCallCount,
      } = get();
      if (
        !masterEnabled ||
        !toggles.tripleClick ||
        calledAnimations.tripleClickCurrencySwap ||
        animationCallCount >= 3
      )
        return;

      const now = Date.now();
      const recentClicks = lastClicks.filter((t) => now - t < 1000);

      if (recentClicks.length >= 2) {
        set({lastClicks: []});

        const animationSubscriber = () => {
          get().triggerClassAnimation("rainbowColor", 7000);
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

        set({
          calledAnimations: newCalledAnimations,
          animationCallCount: newCount,
        });

        if (typeof window !== "undefined") {
          localStorage.setItem(
            ANIMATION_CALLS_KEY,
            JSON.stringify(newCalledAnimations),
          );
          localStorage.setItem(ANIMATION_COUNT_KEY, newCount.toString());
        }

        get().subscribers.push(animationSubscriber);
        get().triggerAnimations();
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
        if (isGlitchNext) {
          get().triggerClassAnimation("glitchLayer", 5000);
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
      store.startPeriodicGlobalAnimation();
      document.addEventListener(
        "visibilitychange",
        store.handleVisibilityChange,
      );

      return () => {
        store.stopPeriodicGlobalAnimation();
        document.removeEventListener(
          "visibilitychange",
          store.handleVisibilityChange,
        );
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

    triggerTextScrambler: () => {
      const headerElement = document.querySelectorAll("p");
      headerElement.forEach((el) => {
        const textScramble = new TextScramble(el);
        textScramble.setText(el.innerText);
      });
    },

    // playRadioAudio: () => {
    //   const play = () => {
    //     const audio = new Audio(radioAudioSrc);
    //     audio.volume = 0.7;
    //     audio.play().catch((e) => console.error("Audio error:", e));

    //     // Auto-stop after 3 seconds
    //     setTimeout(() => {
    //       audio.pause();
    //       audio.currentTime = 0;
    //     }, 3000);
    //   };

    //   return {play};
    // },
  })),
);

if (typeof window !== "undefined") {
  const cleanup = useAnimationStore.getState().initializeGlobalAnimation();
  window.addEventListener("beforeunload", cleanup);
}
