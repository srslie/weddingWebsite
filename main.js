
// Wrap every letter in a span
var textWrapper = document.querySelector('.wedding');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

letters = document.querySelectorAll('.wedding .letter');
for(letter in letters) {
  startrot = Math.random() * 30 - 10;
  endrot = Math.random() * 30 - 10;
  anime({
      targets: letters[letter],
      keyframes: [
          { translateY: [2, -2], rotate: [startrot, endrot], duration: anime.random(800, 1100) },
          { translateY: [-2, 2], rotate: [endrot, startrot], duration: anime.random(800, 1100) },
      ],
      loop: true,
      easing: "easeInOutSine",
    });
}
