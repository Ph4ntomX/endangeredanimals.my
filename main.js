const gradientBackground = document.getElementById("fade");
const backgroundElements = document.getElementsByClassName("background");

const tiger = document.getElementById("tiger");
const tapir = document.getElementById("tapir");
const monkey = document.getElementById("monkey");
const orangutan = document.getElementById("orangutan");

const bamboo = document.getElementById("bamboo");
const tree1 = document.getElementById("tree1");
const tree2 = document.getElementById("tree2");
const tree3 = document.getElementById("tree3");

const button1 = document.getElementById("firstButton")
const button2 = document.getElementById("secondButton")
const button3 = document.getElementById("thirdButton")
const button4 = document.getElementById("fourthButton")

const backToTop = document.getElementById("custom");

console.log("Height: " + window.innerHeight);

document.addEventListener("scroll", (event) => {
    let scrollPosition = window.scrollY;
    let ratio = scrollPosition / window.innerHeight;

    let value = -ratio * 90 + 90;
    gradientBackground.style.opacity = value + "%";

    let xVH = 0
    let yVH = 0

    let bamboox = -30
    let tree2x = -50
    let tree3x = 30

    let opacity1 = 0
    let opacity2 = 0
    let opacity3 = 0
    let opacity4 = 0

    let opacity = 100
    if(ratio < 1) {
        xVH = -30 * ratio
        yVH = -10 * ratio
        opacity1 = 120 * ratio

        tree3x = 30 * ratio
        tree2x = 0
        bamboox = 0

        opacity = 100 * ratio
    } else if(ratio < 2) {
        xVH = -30 + (40 - -30) * (ratio - 1)
        yVH = -10 + (0 - -10) * (ratio - 1)

        opacity1 = 120 + -120 * (ratio - 1)
        opacity2 = 120 * (ratio - 1)

        tree2x = -50 * (ratio - 1)

        bamboox = 0
    } else if(ratio < 3) {
        xVH = 40 + (-20 - 40) * (ratio - 2)

        opacity2 = 120 + -120 * (ratio - 2)
        opacity3 = 120 * (ratio - 2)

        let rotation = 10 * (ratio - 2)

        tree1.style.rotate = rotation + "deg"

        bamboox = 0
    } else if(ratio < 4) {
        xVH = -20 + (30 - -20) * (ratio - 3)
        yVH = 40 * (ratio - 3)

        opacity3 = 120 + -120 * (ratio - 3)
        opacity4 = 120 * (ratio - 3)

        bamboox = -30 * (ratio - 3)
    } else {
        xVH = 30 + (0 - 30) * (ratio - 4)
        yVH = 40 + (0 - 40) * (ratio - 4)

        opacity4 = 120 + -120 * (ratio - 4)
    }

    xVH /= (window.innerWidth / 1800)

    tiger.style.opacity = opacity1 + "%"
    tapir.style.opacity = opacity2 + "%"
    monkey.style.opacity = opacity3 + "%"
    orangutan.style.opacity = opacity4 + "%"

    let height = 150 + ratio * 30

    for(let element of backgroundElements) {
        element.style.height = height + "vh"
        element.style.marginRight = xVH + "vh"
        element.style.marginTop = yVH + "vh"
    }

    tree2.style.marginRight = (xVH + tree2x) + "vh"
    tree3.style.marginRight = (xVH + tree3x) + "vh"
    bamboo.style.marginRight = (xVH + bamboox) + "vh"

    backToTop.style.opacity = opacity + "%"
})

backToTop.addEventListener("click", () => {
    window.scrollTo(0,0);
})

const params = window.location.search
const queryParams = new URLSearchParams(params)

console.log(params)

button1.addEventListener("click", () => {
    console.log("click to " + queryParams.get("link1"))
    window.location.href = queryParams.get("link1")
})

button2.addEventListener("click", () => {
    window.location.href = queryParams.get("link2")
})

button3.addEventListener("click", () => {
    window.location.href = queryParams.get("link3")
})

button4.addEventListener("click", () => {
    window.location.href = queryParams.get("link4")
})