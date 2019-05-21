# HTML5 Canvas

## Repository containing practice code for HTML5 Canvas

Because of my poor previous knowledge of the HTML5 Canvas and lack of practice, I've decided to start learning canvas
manipulation in depth so I can make myself capable of creating interesting stuff inside of it.

After this path completion, my goal is to start investigating Three.js and WebGL and get my canvas skills even higher.

### Four essential skills for HTML5 Canvas

1. Creating and Resizing Canvas
2. Drawing Elements
3. Animating Elements
4. Interacting with Elements

---

## Creating and Resizing Canvas

Canvas by the default has a white background color.

```javascript
/* Canvas properties related to the creation and resizing. */

getContext("2d") // Returns drawing context or something like a drawing board.

width // Canvas width

height // Canvas height

fillRect(xPos, yPos, width, height) // Draw rectangle on the canvas context.
```

## Drawing Elements

There are 6 types of elements (objects) that can be drawn on the canvas.

1. Rectangles
2. Lines
3. Arcs / Circles
4. Bezier curves
5. Images
6. Text

### Drawing a line

```javascript
beginPath() // Signals canvas that we are about to create a stroke on it.
moveTo(xPos, yPos) // Tells canvas to create stroke starting point at the given coordinates.
lineTo(xPos, yPos) // Tells canvas to create next stroke point on the canvas.
strokeStyle // Property containing any CSS color.
stroke() // Signals to canvas that it should connect the points and draw a stroke.
```

### Drawing a circle

```javascript
/**
 * Creates an arc on the given coordinates.
 * By the default it writes arc clockwise from left to right but it can be reversed by specifying
 * anticlockwise parameter. For the circle it does not matter.
 */
arc(xPos, yPos, radius, startAngle, endAngle, anticlockwise)
```

![Image](https://www.w3schools.com/tags/img_arc.gif)

## Animating Elements

In order to animate anything on the canvas, we need to call method `requestAnimationFrame` which refreshes
the content of the canvas.
