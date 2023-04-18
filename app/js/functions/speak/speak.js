export const speak = (index) => {
  const speakComunication = document.querySelector(".communications." + index);
  speakComunication.classList.add("on");

  setTimeout(() => {
    speakComunication.classList.remove("on");
  }, 2000);
};
