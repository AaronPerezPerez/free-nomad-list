const BLURRED_ELEMENT = "ul.grid.show.view";
const JOIN_ELEMENT = "div.notice-sign-up-to-unblur";

function removeBlur() {
    const blurred = findBlurredWall();
    blurred.removeAttribute("style")
}

function findBlurredWall() {
    return document.querySelector(BLURRED_ELEMENT);
}

function findJoinButton() {
    return document.querySelector(JOIN_ELEMENT);
}

setInterval(() => {
    findJoinButton()?.remove()
    if (findBlurredWall()) removeBlur();
}, 50)
