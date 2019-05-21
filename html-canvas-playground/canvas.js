/**
 * Creates and draws a non filled rectangle shape on the given canvas.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} width
 * @param {number} height
 * @param {string} color
 */
function drawRect(context, xPos, yPos, width, height, color = "#000") {
    context.beginPath();
    context.strokeStyle = color;
    context.rect(xPos, yPos, width, height);
    context.stroke();
}

/**
 * Creates and draws a filled rectangle shape on the given canvas.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} width
 * @param {number} height
 * @param {string} color
 */
function drawFilledRect(context, xPos, yPos, width, height, color = "#000") {
    context.beginPath();
    context.fillStyle = color;
    context.fillRect(xPos, yPos, width, height);
}

/**
 * Creates a line shape on the given canvas without drawing.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} startXPos
 * @param {number} startYPos
 * @param {number} endXPos
 * @param {number} endYPos
 * @param {string} color
 *
 * @returns {object}
 */
function createLine(context, startXPos, startYPos, endXPos, endYPos, color = "#000") {
    context.beginPath();
    context.moveTo(startXPos, startYPos);
    context.lineTo(endXPos, endYPos);
    context.strokeStyle = color;

    return {
        setColor: function(color = "#000") {
            context.strokeStyle = color;
            return this;
        },
        extendTo: function (xPos, yPos) {
            context.lineTo(xPos, yPos);
            context.strokeStyle = color;
            return this;
        },
        draw: function () {
            context.stroke();
        }
    }
}

function drawCircle(context, xPos, yPos, radius, color = "#000", anticlockwise = false) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(xPos, yPos, radius, 0, Math.PI * 2, anticlockwise);
    context.stroke();
}

function drawFilledCircle(context, xPos, yPos, radius, color = "#000", anticlockwise = false) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(xPos, yPos, radius, 0, Math.PI * 2, anticlockwise);
    context.fill();
}

function clearCanvas(canvas, context) {
    context.clearCanvas(0, 0, canvas.width, canvas.height);
}
