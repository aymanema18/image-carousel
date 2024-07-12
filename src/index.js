import './style.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';

const image1 = document.querySelector('.img-1');
const image2 = document.querySelector('.img-2');
const image3 = document.querySelector('.img-3');
const image4 = document.querySelector('.img-4');
const imgCircle1 = document.querySelector('.img1-div');
const imgCircle2 = document.querySelector('.img2-div');
const imgCircle3 = document.querySelector('.img3-div');
const imgCircle4 = document.querySelector('.img4-div');
const circles = document.querySelectorAll('.circle');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

image1.src = img1;
image2.src = img2;
image3.src = img3;
image4.src = img4;
document.querySelector('.img1-div').style.backgroundColor = 'gray';

leftArrow.addEventListener('click', () => {
    let flag = false;
    circles.forEach((circle) => {
        if (circle.style.backgroundColor !== '' && flag === false) {
            const images = document.querySelectorAll('.img');
            for (let img of images) {
                if (
                    img.getAttribute('data-id') ===
                    circle.getAttribute('data-id')
                ) {
                    img.style.display = 'none';
                    circle.style.backgroundColor = '';
                    if (img.previousElementSibling) {
                        img.previousElementSibling.style.display = 'block';
                        circle.previousElementSibling.style.backgroundColor =
                            'gray';
                        clearInterval(intr);
                        intr = setInterval(runCarousel, 5000);
                        flag = true;
                    } else {
                        document.querySelector(
                            '.img:last-child',
                        ).style.display = 'block';
                        document.querySelector(
                            '.circle:last-child',
                        ).style.backgroundColor = 'gray';
                        clearInterval(intr);
                        intr = setInterval(runCarousel, 5000);
                        flag = true;
                    }
                }
            }
        }
    });
});

rightArrow.addEventListener('click', () => {
    let flag = false;
    circles.forEach((circle) => {
        if (circle.style.backgroundColor !== '' && flag === false) {
            const images = document.querySelectorAll('.img');
            for (let img of images) {
                if (
                    img.getAttribute('data-id') ===
                    circle.getAttribute('data-id')
                ) {
                    img.style.display = 'none';
                    circle.style.backgroundColor = '';
                    if (img.nextElementSibling) {
                        img.nextElementSibling.style.display = 'block';
                        circle.nextElementSibling.style.backgroundColor =
                            'gray';
                        clearInterval(intr);
                        intr = setInterval(runCarousel, 5000);
                        flag = true;
                    } else {
                        document.querySelector('.img-1').style.display =
                            'block';
                        document.querySelector(
                            '.img1-div',
                        ).style.backgroundColor = 'gray';
                        clearInterval(intr);
                        intr = setInterval(runCarousel, 5000);
                        flag = true;
                    }
                }
            }
        }
    });
});

circles.forEach((circle) => {
    const images = document.querySelectorAll('.img');
    for (let img of images) {
        if (img.getAttribute('data-id') === circle.getAttribute('data-id')) {
            circle.addEventListener('click', () => {
                images.forEach((img) => {
                    img.style.display = 'none';
                });
                img.style.display = 'block';
                circles.forEach((circle) => {
                    circle.style.backgroundColor = '';
                });
                circle.style.backgroundColor = 'gray';
                clearInterval(intr);
                intr = setInterval(runCarousel, 5000);
            });
        }
    }
});

function runCarousel() {
    if (image1.style.display !== 'none') {
        image1.style.display = 'none';
        image1.nextElementSibling.style.display = 'block';
        document.querySelector('.img1-div').style.backgroundColor = '';
        document.querySelector(
            '.img1-div',
        ).nextElementSibling.style.backgroundColor = 'gray';
    } else if (image1.style.display === 'none') {
        let next = image1;
        do {
            next = next.nextElementSibling;
        } while (next.style.display === 'none');
        next.style.display = 'none';
        if (next === document.querySelector('img:last-child')) {
            image1.style.display = 'block';
            document.querySelector('.circle:last-child').style.backgroundColor =
                '';
            document.querySelector('.img1-div').style.backgroundColor = 'gray';
            return;
        }
        circles.forEach((circle) => {
            if (
                circle.getAttribute('data-id') ===
                next.nextElementSibling.getAttribute('data-id')
            ) {
                circle.style.backgroundColor = 'gray';
            } else {
                circle.style.backgroundColor = '';
            }
        });
        next.nextElementSibling.style.display = 'block';
    }
}

let intr = setInterval(runCarousel, 5000);
