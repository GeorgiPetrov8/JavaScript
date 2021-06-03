function rectangle(width, height, color) {
    color = color.charAt(0).toUpperCase() + color.slice(1);
    let shape = { width, height, color };
    shape.calcArea = () => {
        return width * height;
    }
    return shape;
}