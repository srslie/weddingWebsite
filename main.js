allcards = document.querySelectorAll(".card");

i = 0;
document.querySelectorAll(".card").forEach((card) => {
  card.style.zIndex = -i;
  i++;
});

// Wrap every letter in a span
// var textWrapper = document.querySelector('.wedding');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

letters = document.querySelectorAll('.weddingletter');
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

const clamp = (n, min, max) =>
Math.min(Math.max(n, min), max)

onscroll = (event) => {
    percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    i = 0;
    allcards.forEach((card) => {
        start = i / allcards.length;
        end = start + 1 / (allcards.length + 1)
        rot = clamp(179 * (percent - start) / (end - start), 0, 179)
        card.style.transform = `perspective(20cm) rotateX(${rot}deg)` 

        if(rot > 90) {
           card.style.zIndex = i;
        } else {
           card.style.zIndex = -i;
        }
        i++;
    })
}
