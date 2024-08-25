function calculateHypotenuse() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);

    if (isNaN(sideA) || isNaN(sideB)) {
        document.getElementById('result').textContent = "Please enter valid numbers for both sides.";
        return;
    }

    const hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    document.getElementById('result').textContent = `The hypotenuse is: ${hypotenuse.toFixed(2)}`;
}
