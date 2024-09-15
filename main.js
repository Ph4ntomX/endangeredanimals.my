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

const translation = {
    "Did you": [
        "Adakah anda tahu? Terdapat 306 <br> haiwan terancam di Malaysia.", 
        "你可知道？马来西亚有<br>306种濒危物种。"],
    "Learn m": [
        "Belajar Lagi", 
        "了解更多"],
    "Share t": [
        "Kongsi laman web ini dan sebarkan kesedaran!", 
        "Fēnxiǎng zhège wǎngzhàn bìng chuánbò yìshí!"],
    "Malayan Ti": [
        "Harimau Malaya", 
        "马来亚虎"],
    "Malayan Ta": [
        "Tapir Malaya", 
        "马来貘"],
    "Proboscis ": [
        "Monyet Proboscis", 
        "长鼻猴"],
    "Bornean Or": [
        "Orangutan Borneo", 
        "婆罗洲或"],
    "Back To": [
        "Kembali Ke Atas",
        "返回顶部"],
    "Share this": [
        "Kongsi laman web ini dan sebarkan kesedaran!",
        "分享这个网站并传播意识！"
    ],
    "The Malayan tiger": [
        "Harimau Malaya ialah subspesies harimau yang sangat terancam, terkenal dengan bulu oren yang menyerlah dengan jalur hitam. Ia berasal dari Semenanjung Tanah Melayu dan merupakan salah satu subspesies harimau terkecil.", 
        "马来亚虎是一种极度濒危的老虎亚种，以其醒目的橙色皮毛和黑色条纹而闻名。它原产于马来半岛，是最小的老虎亚种之一。"],
    "The Malayan tapir": [
        "Tapir Malaya, juga dikenali sebagai tapir Asia, adalah yang terbesar daripada empat spesies tapir yang berasal dari hutan Asia Tenggara", 
        "马来貘，也称为亚洲貘，是原产于东南亚森林的四种貘中体型最大的。"],
    "The proboscis mon": [
        "Monyet proboscis ialah monyet Dunia Lama arboreal dengan hidung yang luar biasa besar, warna kulit coklat kemerahan dan ekor yang panjang. Ia berasal dari pulau Asia Tenggara Borneo.", 
        "长鼻猴是一种树栖的旧大陆猴子，有着异常大的鼻子、红棕色的皮肤和长长的尾巴。它原产于东南亚婆罗洲岛。"],
    "Orangutans are la": [
        "Orangutan ialah primata besar berwarna coklat kemerahan yang berasal dari Borneo dan Sumatera. Mereka sangat pintar, arboreal, dan terutamanya bersendirian.",
        "猩猩是大型红棕色灵长类动物，原产于婆罗洲和苏门答腊岛。它们非常聪明，喜欢树栖，并且主要是独居的。"]
}

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

button1.addEventListener("click", () => {
    window.open(queryParams.get("link1"), "_blank")
})

button2.addEventListener("click", () => {
    window.open(queryParams.get("link2"), "_blank")
})

button3.addEventListener("click", () => {
    window.open(queryParams.get("link3"), "_blank")
})

button4.addEventListener("click", () => {
    window.open(queryParams.get("link4"), "_top")
})

// Translation

let ind = 0

if(queryParams.get("lang") != "en") {
    let ind = 0

    if(queryParams.get("lang") == "ma") {
        ind = 1
    }

    const mainText = document.getElementById("mainText")
    const leadingTexts = document.getElementsByClassName("leadingText")
    const descriptionTexts = document.getElementsByClassName("descriptionText")


    console.log(button1.innerHTML.substring(0,7))
    mainText.innerHTML = translation[mainText.innerHTML.substring(0,7)][ind]
    backToTop.innerHTML = translation[backToTop.innerHTML.substring(0,7)][ind]

    button1.innerHTML = translation[button1.innerHTML.substring(0,7)][ind]
    button2.innerHTML = translation[button2.innerHTML.substring(0,7)][ind]
    button3.innerHTML = translation[button3.innerHTML.substring(0,7)][ind]
    button4.innerHTML = translation[button4.innerHTML.substring(0,7)][ind]

    for(let leadingText of leadingTexts) {
        console.log(leadingText.innerHTML.substring(0,10))
        leadingText.innerHTML = translation[leadingText.innerHTML.substring(0,10)][ind]
    }

    for(let descriptionText of descriptionTexts) {
        console.log(descriptionText.innerHTML.substring(0,17))
        descriptionText.innerHTML = translation[descriptionText.innerHTML.substring(0,17)][ind]
    }

    
}