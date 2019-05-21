/**
 * @type HTMLCanvasElement
 * @public
 */
const canvas = document.getElementById('canvas');

/** Set canvas width and height to fill the window size. */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

function animate() {
    requestAnimationFrame(animate);
}
