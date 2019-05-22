/**
 * @type HTMLCanvasElement
 * @public
 */
const canvas = document.getElementById('canvas');

/** Set canvas width and height to fill the window size. */
function recalculateCanvasDimensions(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onresize = () => {
    recalculateCanvasDimensions(canvas);
};

recalculateCanvasDimensions(canvas);

const context = canvas.getContext('2d');

let x = 200;

let VELOCITY = 4;
const RADIUS = 30;

function animate() {
    requestAnimationFrame(animate);

    clearCanvas(canvas, context);

    /** @memberof ./canvas.js */
    drawFilledCircle(context, x, 100, RADIUS);

    if (x + RADIUS > window.innerWidth || x - RADIUS < 0) {
        VELOCITY = -VELOCITY;
    }

    x += VELOCITY;
}

animate();
