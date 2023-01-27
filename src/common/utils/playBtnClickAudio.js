import clickBtnSound from "../../assets/audio/btn-click.wav";

export const playBtnClickSound = () => {
  const audio = new Audio(clickBtnSound);
  audio.play();
};
