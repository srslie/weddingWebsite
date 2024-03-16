let allcards = document.querySelectorAll(".card");

function boozier(p0, p1, p2, p3, t) {
    let oneMinus = 1 - t;
    return oneMinus * oneMinus * oneMinus * p0 +
        3 * oneMinus * oneMinus * t * p1 +
        3 * oneMinus * t * t * p2 +
        t * t * t * p3;
}

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

const clamp = (n, min, max) => Math.min(Math.max(n, min), max)

onscroll = (event) => {
    percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    let i = 0;
    allcards.forEach((card) => {
        let start = i / allcards.length;
        let end = start + 1 / (allcards.length + 1);
        let t = (percent - start) / (end - start);
        if(t >= 0 && t <= 1) {
            console.log(t);
            t = boozier(0, 1.1, 0.9, 1, t);
            console.log(t);
        }
        let rot = clamp(179 * t, 0, 179)
        card.style.transform = `perspective(20cm) rotateX(${rot}deg)` 

        if(rot > 90) {
           card.style.zIndex = i;
        } else {
           card.style.zIndex = -i;
        }
        i++;
    })
}
