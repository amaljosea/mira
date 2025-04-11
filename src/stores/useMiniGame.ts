import {create} from "zustand";
import {subscribeWithSelector} from "zustand/middleware";

type AnimationTrigger = () => void;
type AnimationType = "timer" | "tripleClick" | "magicNumber";

interface AnimationState {
  masterEnabled: boolean;
  toggles: Record<AnimationType, boolean>;
  subscribers: AnimationTrigger[];
  inputBuffer: string;
  lastClicks: number[];
  setToggle: (type: AnimationType, enabled: boolean) => void;
  subscribe: (callback: AnimationTrigger) => () => void;
  triggerAnimations: () => void;
  handleTripleClick: () => void;
  handleInputChange: (value: string) => void;
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
    },
    subscribers: [],
    inputBuffer: "",
    lastClicks: [],

    setToggle: (type, enabled) =>
      set((state) => ({
        toggles: {...state.toggles, [type]: enabled},
      })),

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

    handleTripleClick: () => {
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

    handleInputChange: (value) => {
      const {masterEnabled, toggles, inputBuffer} = get();
      if (!masterEnabled || !toggles.magicNumber) return;

      const newBuffer = (inputBuffer + value).slice(-5).replace(/[^0-9.]/g, "");

      set({inputBuffer: newBuffer});

      if (newBuffer === "19.85") {
        get().triggerAnimations();
        set({inputBuffer: ""});
      }
    },
  })),
);
