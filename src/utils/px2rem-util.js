let maxWidth = 1920;
let minWidth = 1024;

export function initPx2Rem() {
    let width = window.innerWidth;
    width = width > maxWidth ? maxWidth : width;
    width = width < minWidth ? minWidth : width;
    document.documentElement.style.fontSize = (width / 1920) * 14 + "px";
}

export function convertPx(val) {
    let width = window.innerWidth;
    width = width > maxWidth ? maxWidth : width;
    width = width < minWidth ? minWidth : width;
    return (width / 1920) * val;
}
