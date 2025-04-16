export const playAudioEffect = (
  src: string,
  options?: {
    volume?: number;
    duration?: number; // how long to play before fade (ms)
    fadeDuration?: number; // how long to fade (ms)
  },
) => {
  const {volume = 0.7, duration = 2500, fadeDuration = 500} = options || {};

  if (typeof window === "undefined") return;

  const audio = new Audio(src);
  audio.volume = volume;

  audio
    .play()
    .then(() => {
      setTimeout(() => {
        const fadeSteps = 10;
        const intervalTime = fadeDuration / fadeSteps;
        const volumeStep = audio.volume / fadeSteps;

        const fadeInterval = setInterval(() => {
          if (audio.volume > volumeStep) {
            audio.volume = Math.max(0, audio.volume - volumeStep);
          } else {
            clearInterval(fadeInterval);
            audio.pause();
            audio.currentTime = 0;
          }
        }, intervalTime);
      }, duration);
    })
    .catch((e) => {
      console.error("Audio playback failed:", e);
    });
};
