// script.js
function calculateBMI() {
    const heightInput = document.getElementById('height');
    const heightUnit = document.getElementById('height-unit').value;
    const weightInput = document.getElementById('weight');
    const weightUnit = document.getElementById('weight-unit').value;

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Input validation
    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for height and weight.');
        return;
    }

    if (height <= 0 || (heightUnit === 'cm' && height < 50) || (heightUnit === 'in' && height < 20)) {
        alert('Height must be a positive value and at least 50 cm (or 20 inches).');
        return;
    }

    if (weight <= 0 || (weightUnit === 'kg' && weight < 20) || (weightUnit === 'lb' && weight < 44)) {
        alert('Weight must be a positive value and at least 20 kg (or 44 pounds).');
        return;
    }

    let heightInMeters;
    let weightInKg;

    if (heightUnit === 'cm') {
        heightInMeters = height / 100;
    } else {
        heightInMeters = height * 0.0254;
    }

    if (weightUnit === 'kg') {
        weightInKg = weight;
    } else {
        weightInKg = weight * 0.453592;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    displayResult(bmi);
}

function displayResult(bmi) {
    const resultDiv = document.getElementById('result');
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}