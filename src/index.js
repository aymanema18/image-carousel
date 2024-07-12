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

image1.src = img1;
image2.src = img2;
image3.src = img3;
image4.src = img4;
document.querySelector('.img1-div').style.backgroundColor = 'gray';

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

setInterval(runCarousel, 2000);
