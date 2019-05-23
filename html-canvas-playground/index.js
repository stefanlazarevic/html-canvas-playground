/**
 * @type HTMLCanvasElement
 * @public
 */
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const BALL_RADIUS = 30;
const BALL_SPEED = 4;

/** Set canvas width and height to fill the window size. */
function recalculateCanvasDimensions(canvas) {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
}

window.onresize = () => recalculateCanvasDimensions(canvas);
recalculateCanvasDimensions(canvas);


let x = Math.random() * (canvas.width - BALL_RADIUS * 2) + BALL_RADIUS;
let y = Math.random() * (canvas.height - BALL_RADIUS * 2) + BALL_RADIUS;
let dx = BALL_SPEED;
let dy = BALL_SPEED;

function animate() {
    requestAnimationFrame(animate);

    clearCanvas(canvas, context);

    /** @memberof ./canvas.js */
    drawFilledCircle(context, x, y, BALL_RADIUS, randomColor());

    if (x + BALL_RADIUS > canvas.width || x - BALL_RADIUS < 0) {
        dx = -dx;
    }

    if (y + BALL_RADIUS > canvas.height || y - BALL_RADIUS < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

animate();

function randomColor() {
    const chars ="0123456789abcdef";
    const prefix = "#";
    let color = prefix;

    for (let i = 0; i < 6; i++) {
      const index = Math.floor(16 * Math.random());
      color += chars.charAt(index);
    }

    return color;
  }
