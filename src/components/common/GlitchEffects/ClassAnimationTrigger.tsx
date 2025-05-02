export function triggerClassAnimation(
  classname: string,
  duration: number,
): () => void {
  if (typeof window === "undefined") return () => {};

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
}
