// Define a function to flip an image horizontally
function flipImageHorizontal(image) {
    // Create a canvas element
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    ;
    // Set canvas dimensions to match the image
    canvas.width = image.width;
    canvas.height = image.height;
    // Flip the image horizontally
    ctx.translate(image.width, 0);
    ctx.scale(-1, 1);
    // Draw the image onto the canvas
    ctx.drawImage(image, 0, 0);
    return canvas;
}
// Example usage
var imageElement = document.createElement('img');
imageElement.onload = function () {
    var flippedCanvas = flipImageHorizontal(imageElement);
    // Do something with the flipped image, like displaying it on the page
    document.body.appendChild(flippedCanvas);
};
imageElement.src = 'img.jpg'; // Set the source of your image here
