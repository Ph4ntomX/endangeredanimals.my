const gradientBackground = document.getElementById("fade");
const backgroundElements = document.getElementsByClassName("background");

const tiger = document.getElementById("tiger");
const tapir = document.getElementById("tapir");
const monkey = document.getElementById("monkey");
const bear = document.getElementById("bear");

console.log("Height: " + window.innerHeight);

document.addEventListener("scroll", (event) => {
    let scrollPosition = window.scrollY;
    let ratio = scrollPosition / window.innerHeight;

    let value = -ratio * 90 + 90;
    gradientBackground.style.opacity = value + "%";

    let xVH = 0
    let yVH = 0

    let opacity1 = 0
    let opacity2 = 0
    let opacity3 = 0
    let opacity4 = 0

    if(ratio < 1) {
        xVH = -30 * ratio
        yVH = -10 * ratio
        opacity1 = 120 * ratio
    } else if(ratio < 2) {
        xVH = -30 + (40 - -30) * (ratio - 1)
        yVH = -10 + (0 - -10) * (ratio - 1)

        opacity1 = 120 + -120 * (ratio - 1)
        opacity2 = 120 * (ratio - 1)
    } else if(ratio < 3) {
        xVH = 40 + (-20 - 40) * (ratio - 2)

        opacity2 = 120 + -120 * (ratio - 2)
        opacity3 = 120 * (ratio - 2)
    } else if(ratio < 4) {
        xVH = -20 + (30 - -20) * (ratio - 3)
        yVH = 40 * (ratio - 3)

        opacity3 = 120 + -120 * (ratio - 3)
        opacity4 = 120 * (ratio - 3)
    } else {
        xVH = 30 + (0 - 30) * (ratio - 4)
        yVH = 40 + (0 - 40) * (ratio - 4)

        opacity4 = 120 + -120 * (ratio - 4)
    }

    tiger.style.opacity = opacity1 + "%"
    tapir.style.opacity = opacity2 + "%"
    monkey.style.opacity = opacity3 + "%"
    bear.style.opacity = opacity4 + "%"

    for(let element of backgroundElements) {
        let height = 150 + ratio * 30

        element.style.height = height + "vh"
        element.style.marginRight = xVH + "vh"
        element.style.marginTop = yVH + "vh"
    }
})