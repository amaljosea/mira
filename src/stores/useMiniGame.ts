import {create} from "zustand";
import {subscribeWithSelector} from "zustand/middleware";

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
  subscribe: (callback: AnimationTrigger) => () => void;
  triggerAnimations: () => void;

  handleMagicTripleClick: () => void;

  handleMagicInput: (value: string) => void;

  startPeriodicGlobalAnimation: () => void;
  stopPeriodicGlobalAnimation: () => void;
  triggerGlobalAnimation: () => void;
  handleVisibilityChange: () => void;
  initializeGlobalAnimation: () => () => void;
}

// Master toggle
const MASTER_ENABLED = true;

export const useAnimationStore = create<AnimationState>()(
  subscribeWithSelector((set, get) => ({
    masterEnabled: MASTER_ENABLED,
    // individual toggles
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

    handleMagicTripleClick: () => {
      const {masterEnabled, toggles, lastClicks} = get();
      if (!masterEnabled || !toggles.tripleClick) return;

      const now = Date.now();
      const recentClicks = lastClicks.filter((t) => now - t < 1000);

      if (recentClicks.length >= 2) {
        set({lastClicks: []});

        const animationSubscriber = () => {
          // define animation here (will figure out how to call animation later)
          alert("GLITCH");
          get().subscribers = get().subscribers.filter(
            (sub) => sub !== animationSubscriber,
          );
        };

        get().subscribers.push(animationSubscriber);
        get().triggerAnimations();
      } else {
        set({lastClicks: [...recentClicks, now]});
      }
    },

    handleMagicInput: (value) => {
      const {masterEnabled, toggles, inputBuffer} = get();
      if (!masterEnabled || !toggles.magicNumber) return;

      const newBuffer = (inputBuffer + value).slice(-5).replace(/[^0-9.]/g, "");
      set({inputBuffer: newBuffer});

      if (newBuffer === "19.85") {
        const magicNumberSubscriber = () => {
          // define animation here (will figure out how to call animation later)
          alert("19.85 detected!");
          set((state) => ({
            subscribers: state.subscribers.filter(
              (sub) => sub !== magicNumberSubscriber,
            ),
          }));
        };

        set((state) => ({
          subscribers: [...state.subscribers, magicNumberSubscriber],
        }));
        get().triggerAnimations();
        set({inputBuffer: ""});
      }
    },

    startPeriodicGlobalAnimation: () => {
      const {masterEnabled, toggles} = get();
      if (!masterEnabled || !toggles.magicNumber) return;

      const intervalId = setInterval(() => {
        get().triggerGlobalAnimation();
      }, 6000); // 1 minute

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

    triggerGlobalAnimation: () => {
      if (typeof window === "undefined") return;
      const glitchElements = document.querySelectorAll(".glitchLayer");
      glitchElements.forEach((el) => {
        (el as HTMLElement).style.display = "block";
      });

      const timeoutId = setTimeout(() => {
        glitchElements.forEach((el) => {
          (el as HTMLElement).style.display = "none";
        });
      }, 5000);

      return () => clearTimeout(timeoutId);
    },
  })),
);

if (typeof window !== "undefined") {
  const cleanup = useAnimationStore.getState().initializeGlobalAnimation();
  window.addEventListener("beforeunload", cleanup);
}
