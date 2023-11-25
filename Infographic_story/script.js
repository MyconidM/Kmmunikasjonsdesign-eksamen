window.addEventListener("scroll", setScroll);
window.addEventListener("resize", setScroll);
let biePositionX = 0;

function setScroll() {
    const element = document.documentElement;
    const moveBie = document.getElementsByClassName("bieConteiner");
    const percentOfScreenHeightScroll = element.scrollTop / element.clientHeight;
    const scrollCount = Math.min(percentOfScreenHeightScroll * 100);
    console.log('Y: ' + scrollCount);
    element.style.setProperty("--scroll", scrollCount);
    console.log('X: ' + window.scrollX + document.querySelector('.bieConteiner').getBoundingClientRect().left);

    if (scrollCount <= 110) {
        // Scrolling down or initial movement
        for (let i = 0; i < moveBie.length; i++) {
            moveBie[i].style.transform = `translateX(calc(1% * (max(var(--scroll), 25) - 100) * 100/75))`;
            biePositionX = window.scrollX + moveBie[i].getBoundingClientRect().left;
        }
    } else if (scrollCount <= 210 && scrollCount >= 110) { // Hjelp fra ChatGBT
        // Scrolling up or reversing the movement
        for (let i = 0; i < moveBie.length; i++) {
            const newXPosition = biePositionX - (scrollCount - 10) * 2; // Adjust the factor as needed
            moveBie[i].style.transform = `translateX(${newXPosition}px)`;
        }
    } else if (scrollCount <= 350 && scrollCount >= 230) {
         for (let i = 0; i < moveBie.length; i++) {
            const newXPosition = biePositionX + (scrollCount - 390) * 2; // Adjust the factor as needed
            moveBie[i].style.transform = `translateX(${newXPosition}px)`;
        }
    } else if (scrollCount <= 450 && scrollCount >= 350) {
        for (let i = 0; i < moveBie.length; i++) {
           const newXPosition = biePositionX - (scrollCount - 310) * 2; // Adjust the factor as needed
           moveBie[i].style.transform = `translateX(${newXPosition}px)`;
       }
   } else if (scrollCount <= 550 && scrollCount >= 450) {
        for (let i = 0; i < moveBie.length; i++) {
        const newXPosition = biePositionX + (scrollCount - 590) * 2; // Adjust the factor as needed
        moveBie[i].style.transform = `translateX(${newXPosition}px)`;
        }
   } else if (scrollCount <= 650 && scrollCount >= 550) {
        for (let i = 0; i < moveBie.length; i++) {
        const newXPosition = biePositionX - (scrollCount - 510) * 2; // Adjust the factor as needed
        moveBie[i].style.transform = `translateX(${newXPosition}px)`;
        }
    } else if (scrollCount <= 750 && scrollCount >= 650) {
        for (let i = 0; i < moveBie.length; i++) {
           const newXPosition = biePositionX + (scrollCount - 790) * 2; // Adjust the factor as needed
           moveBie[i].style.transform = `translateX(${newXPosition}px)`;
        }
    } else if (scrollCount <= 850 && scrollCount >= 750) {
        for (let i = 0; i < moveBie.length; i++) {
           const newXPosition = biePositionX - (scrollCount - 710) * 2; // Adjust the factor as needed
           moveBie[i].style.transform = `translateX(${newXPosition}px)`;
        }
    } else if (scrollCount <= 950 && scrollCount >= 850) {
        for (let i = 0; i < moveBie.length; i++) {
            const newXPosition = biePositionX + (scrollCount - 990) * 2; // Adjust the factor as needed
            moveBie[i].style.transform = `translateX(${newXPosition}px)`;
        }
    } else if (scrollCount <= 1050 && scrollCount >= 950) {
        for (let i = 0; i < moveBie.length; i++) {
           const newXPosition = biePositionX - (scrollCount - 905) * 2; // Adjust the factor as needed
           moveBie[i].style.transform = `translateX(${newXPosition}px)`;
        }
    }
}

setScroll();
