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

/**
 * Creates and draws empty arc/curve shape on the given canvas drawing.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} radius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {string} color
 * @param {boolean} anticlockwise
 */
function drawArc(context, xPos, yPos, radius, startAngle, endAngle, color = "#000", anticlockwise = false) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(xPos, yPos, radius, startAngle, endAngle, anticlockwise);
    context.stroke();
}

/**
 * Creates and draws filled arc/curve shape on the given canvas drawing.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} radius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {string} color
 * @param {boolean} anticlockwise
 */
function drawFilledArc(context, xPos, yPos, radius, startAngle, endAngle, color = "#000", anticlockwise = false) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(xPos, yPos, radius, startAngle, endAngle, anticlockwise);
    context.fill();
}

/**
 * Creates and draws empty circle shape on the given canvas drawing.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} radius
 * @param {string} color
 * @param {boolean} anticlockwise
 */
function drawCircle(context, xPos, yPos, radius, color = "#000", anticlockwise = false) {
    this.drawArc(context, xPos, yPos, radius, 0, Math.PI * 2, color, anticlockwise);
}

/**
 * Creates and draws filled circle shape on the given canvas drawing.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} radius
 * @param {string} color
 * @param {boolean} anticlockwise
 */
function drawFilledCircle(context, xPos, yPos, radius, color = "#000", anticlockwise = false) {
    this.drawFilledArc(context, xPos, yPos, radius, 0, Math.PI * 2, color, anticlockwise);
}

/**
 * Clears given canvas for redrawing.
 *
 * @param {HTMLCanvasElement} canvas
 * @param {CanvasRenderingContext2D} context
 */
function clearCanvas(canvas, context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
