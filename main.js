const allcards = document.querySelectorAll(".card");

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
    scrollToPosition(2)
}

function scrollToPosition(card) {
    console.log('inscroll');
    getElementById(card).scrollToView({ behavior: "smooth"});
}

// const letters = document.querySelectorAll(".weddingletter");
// for (letter in letters) {
//     const startrot = Math.random() * 30 - 10;
//     const endrot = Math.random() * 30 - 10;
//     const min = 800;
//     const max = 1100;

//     // loop: true;
//     // easing: "easeInOutSine";
//     letter.animate({
//         keyframes: [{
//                 translateY: [2, -2],
//                 rotate: [startrot, endrot],
//                 duration: Math.floor(Math.random() * (max - min  + 1)),
//             },
//             {
//                 translateY: [-2, 2],
//                 rotate: [endrot, startrot],
//                 duration: Math.floor(Math.random() * (max - min  + 1))
//             },
//         ],
//     });
// }
