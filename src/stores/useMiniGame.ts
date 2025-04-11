import {create} from "zustand";
import {subscribeWithSelector} from "zustand/middleware";

type AnimationTrigger = () => void;
type AnimationType = "timer" | "tripleClick" | "magicNumber";

interface AnimationState {
  masterEnabled: boolean; // Hardcoded value (no setter)
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

// Master toggle is set here (change as needed)
const MASTER_ENABLED = true;

export const useAnimationStore = create<AnimationState>()(
  subscribeWithSelector((set, get) => ({
    masterEnabled: MASTER_ENABLED,
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
      const recentClicks = lastClicks.filter((t) => now - t < 1000); // 1-second window

      if (recentClicks.length >= 2) {
        // 3rd click
        set({lastClicks: []}); // Reset click tracker

        // TEMPORARY subscriber pattern
        const alertSubscriber = () => {
          alert("GLITCH");
          // Immediately unsubscribe after firing
          get().subscribers = get().subscribers.filter(
            (sub) => sub !== alertSubscriber,
          );
        };

        // Add temporarily
        get().subscribers.push(alertSubscriber);
        get().triggerAnimations(); // Fires ONLY the new subscriber
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

// Timer logic (unchanged)
let timerInterval: NodeJS.Timeout | null = null;

const startTimer = () => {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    useAnimationStore.getState().triggerAnimations();
  }, 60_000);
};

useAnimationStore.subscribe(
  (state) => state.masterEnabled && state.toggles.timer,
  (enabled) => {
    enabled ? startTimer() : timerInterval && clearInterval(timerInterval);
  },
  {fireImmediately: true},
);
