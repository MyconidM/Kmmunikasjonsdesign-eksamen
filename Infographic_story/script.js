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
            moveBie[i].style.transform = `translateX(calc(1% * (max(var(--scroll), 25) - 25) * 100/25))`;
            biePositionX = window.scrollX + moveBie[i].getBoundingClientRect().left;
        }
    } else if (scrollCount <= 210 && scrollCount >= 110) { // Hjelp fra ChatGBT
        // Scrolling up or reversing the movement
        for (let i = 0; i < moveBie.length; i++) {
            const newXPosition = biePositionX - (scrollCount - 110) * 2; // Adjust the factor as needed
            moveBie[i].style.transform = `translateX(${newXPosition}px)`;
        }
    } else if (scrollCount <= 450 && scrollCount >= 230) {
         for (let i = 0; i < moveBie.length; i++) {
            const newXPosition = biePositionX + (scrollCount - 340) * 2; // Adjust the factor as needed
            moveBie[i].style.transform = `translateX(${newXPosition}px)`;
        }
    } else if (scrollCount <= 550 && scrollCount >= 450) {
        for (let i = 0; i < moveBie.length; i++) {
           const newXPosition = biePositionX - (scrollCount - 550) * 2; // Adjust the factor as needed
           moveBie[i].style.transform = `translateX(${newXPosition}px)`;
       }
   }
}

setScroll();
