import { alarm } from "./alarm.js";
import { state } from "./state.js";

const minutesElems = document.querySelector(".time__minutes");
const secondsElems = document.querySelector(".time__seconds");

const showTime = (seconds) => {
  minutesElems.textContent = Math.floor(seconds / 60);
  secondsElems.textContent = seconds % 60;
};

export const startTimer = () => {
  state.timeLeft -= 1;

  showTime(state.timeLeft);

  if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(startTimer, 1000);
  }

  if (state.timeLeft <= 0) {
    alarm();
  }
};
