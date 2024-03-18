const allcards = document.querySelectorAll(".card");
const numberOfCards = Math.min(allcards.length/2);
const positionYperCard = (document.body.scrollHeight - window.innerHeight) / numberOfCards;

//event listeners
window.addEventListener('scroll', handleScroll);
document.getElementById("timeline").addEventListener('click', handleNavToTimeline);
document.getElementById("travel").addEventListener('click', handleNavToTravel);
document.getElementById("lodging").addEventListener('click', handleNavToTimeline);
document.getElementById("thingsToDo").addEventListener('click', handleNavToTimeline);
document.getElementById("registry").addEventListener('click', handleNavToTimeline);

function handleNav(event) {
    console.log('in handle nav', event.target.id);
}

function handleNavToTimeline(event) {
    console.log('inNavToTimeline');
    const element = document.getElementsByClassName("timeline")
    console.log(element);
    const topPosition = positionYperCard * 1;
    window.scrollTo({
        top: topPosition,
        left: 0,
        behavior: "smooth",
    });
}
function handleNavToTravel(event) {
    console.log('inNavToTravel');
    const topPosition = positionYperCard * 2;
    window.scrollTo({
        top: topPosition,
        left: 0,
        behavior: "smooth",
    });
}

function boozier(p0, p1, p2, p3, t) {
    let oneMinus = 1 - t;
    return (
        oneMinus * oneMinus * oneMinus * p0 +
        3 * oneMinus * oneMinus * t * p1 +
        3 * oneMinus * t * t * p2 +
        t * t * t * p3
    );

    // cubic-bezier(0.645, 0.045, 0.355, 1);
}

i = 0;
document.querySelectorAll(".card").forEach((card) => {
    card.style.zIndex = -i;

    if(i%2 == 0) {
        card.classList.add("bottom");
    } else {
        card.classList.add("top");
    }

    i++;
});

// Wrap every letter in a span
// var textWrapper = document.querySelector('.wedding');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const letters = document.querySelectorAll(".weddingletter");
for (letter in letters) {
    startrot = Math.random() * 30 - 10;
    endrot = Math.random() * 30 - 10;
    anime({
        targets: letters[letter],
        keyframes: [{
                translateY: [2, -2],
                rotate: [startrot, endrot],
                duration: anime.random(800, 1100),
            },
            {
                translateY: [-2, 2],
                rotate: [endrot, startrot],
                duration: anime.random(800, 1100),
            },
        ],
        loop: true,
        easing: "easeInOutSine",
    });
}

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

function handleScroll(event) {
    percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    let i = 0;
    allcards.forEach((card) => {
        let usingI = Math.floor(i/2);
        const start = usingI / numberOfCards;
        const end = start + 1 / (numberOfCards + 1);
        let t = (percent - start) / (end - start);
        if (t >= 0 && t <= 1) {
            t = boozier(0, 1.1, 0.9, 1, t);
            
            // t = boozier(0.645, 0.045, 0.355, 1, t);
        }

        let rot = clamp(179 * t, 0, 179);
        if(card.classList.contains("top")) {
            rot = rot + 180;
        }

        card.style.transform = `perspective(20cm) rotateX(${rot}deg)`;

        if (rot > 90) {
            card.style.zIndex = usingI;
        } else {
            card.style.zIndex = -usingI;
        }
        i++;
    });
};

window.onload = (event) => { handleScroll(null); }
