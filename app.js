
const contexMenu = document.querySelector('.wrapper'),
    shareMenu = contexMenu.querySelector('.share-menu');

document.addEventListener('contextmenu', e => {

    e.preventDefault();

    let x = e.offsetX,
        y = e.offsetY,
        winWidth = window.innerWidth,
        winheigth = window.innerHeight,
        cmWidth = contexMenu.offsetWidth,
        cmhehigth = contexMenu.offsetHeight;

    if (x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = '-200px';
    } else {
        shareMenu.style.left = '';
        shareMenu.style.right = '-200px';
    };

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winheigth - cmhehigth ? winheigth - cmhehigth : y;

    contexMenu.style.left = `${x}px`;
    contexMenu.style.top = ` ${y}px `;
    contexMenu.style.transform = 'scale(1)';
});

document.addEventListener('click', () => contexMenu.style.transform = 'scale(0)')