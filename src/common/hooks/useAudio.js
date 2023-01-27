import { useEffect } from "react";

const useAudio = (sound) => {
  const handleClick = (e) => {
    console.log("🚀 ~ file: useAudio.js:5 ~ handleClick ~ e target", e.target);
    console.log(
      "🚀 ~ file: useAudio.js:5 ~ handleClick ~ e currentTarget",
      e.currentTarget
    );
    if (e.target.dataset.audio === "true") return;
    const audio = new Audio(sound);
    audio.play();
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useAudio;
