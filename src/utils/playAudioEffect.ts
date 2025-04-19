let currentAudio: HTMLAudioElement | null = null;

export const playAudioEffect = (
  src: string,
  options?: {
    volume?: number;
    maxDuration?: number;
  },
) => {
  const {volume = 0.7, maxDuration} = options || {};

  if (typeof window === "undefined") return;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }

  const audio = new Audio(src);
  audio.volume = volume;
  audio.play().catch((e) => console.error("Audio playback failed:", e));

  currentAudio = audio;

  if (maxDuration) {
    setTimeout(() => {
      if (audio === currentAudio) {
        audio.pause();
        audio.currentTime = 0;
        currentAudio = null;
      }
    }, maxDuration);
  }
};

export const stopCurrentAudio = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
};
