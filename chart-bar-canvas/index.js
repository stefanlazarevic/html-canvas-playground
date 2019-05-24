
const data = [-4, 2, 10, 4, -7, 12, 14, 9, -14, -17, 0, 8, 12, 22, 24, 102, -102, 1024];

class Canvas {

    constructor(canvas, data = []) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.data = data;
    }

    set data(data) {
        this.data = data;
    }

    get data() {
        return this.data;
    }

    draw() {

    }
}

/** @type HTMLCanvasElement */
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const BAR_WIDTH = canvas.width / data.length;

let min = data[0];
let max = data[0];
for (let index = 1; index < data.length; index++) {
    min = data[index] < min ? data[index] : min;
    max = data[index] > max ? data[index] : max;
}

const BASE_Y = max * canvas.height / (max - min);

context.beginPath();
context.moveTo(0, BASE_Y);
context.lineTo(canvas.width, BASE_Y);
context.stroke();

for (let index = 0; index < data.length; index++) {
    const value = data[index];
    const BAR_HEIGHT = canvas.height / (min - max) * value + BASE_Y;

    if (value >= 0) {
        context.fillRect(BAR_WIDTH * index, BAR_HEIGHT, BAR_WIDTH, BASE_Y - BAR_HEIGHT);
    } else {
        context.fillRect(BAR_WIDTH * index, BASE_Y, BAR_WIDTH, BAR_HEIGHT - BASE_Y);
    }
}
