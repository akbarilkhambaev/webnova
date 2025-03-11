import { DotLottie } from "<https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm>";
import animationData from './analyse.json';

const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: animationData.src, // Берем ссылку из JSON
});

console.log(`Анимация: ${animationData.title}`);
console.log(`Описание: ${animationData.description}`);
