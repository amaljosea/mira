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
  startGlobalAnimation: () => void;
  stopGlobalAnimation: () => void;
  triggerGlobalAnimation: () => void;
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
          alert("🔢 Magic number detected!");
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

    startGlobalAnimation: () => {
      const {masterEnabled, toggles} = get();
      if (!masterEnabled || !toggles.magicNumber) return;

      const intervalId = setInterval(() => {
        get().triggerGlobalAnimation();
      }, 60000); // 1 minute

      set({intervalId, isGlobalActive: true});
    },

    stopGlobalAnimation: () => {
      const {intervalId} = get();
      if (intervalId) {
        clearInterval(intervalId);
        set({intervalId: null, isGlobalActive: false});
      }
    },

    triggerGlobalAnimation: () => {
      alert("Global animation");
    },
  })),
);

// Initialize when store loads - global animation
if (typeof window !== "undefined") {
  useAnimationStore.getState().startGlobalAnimation();
}
