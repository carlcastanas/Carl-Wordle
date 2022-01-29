import animationManager from "https://assets.codepen.io/278239/animationManager.js";
import animationData from "https://assets.codepen.io/278239/sparta.js";

const container = document.getElementById('container');
const restart = document.getElementById('restart');

animationManager.initialize(container, 6, 5);
animationManager.start(animationData.frames, animationData.animation);
animationManager.onComplete = function() {
  restart.style.display = 'block';
}
restart.addEventListener('click', function() {
  animationManager.restart();
  restart.style.display = 'none';
})