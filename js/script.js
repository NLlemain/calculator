let isOn = true;

function addToDisplay(value) {
    if (isOn) {
        const display = document.getElementById('display');
        if (value === 'π') {
            display.value += Math.PI;
        } else if (value === 'sin(' || value === 'cos(' || value === 'tan(') {
            display.value += value;
        } else {
            display.value += value;
        }
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    if (isOn) {
        const display = document.getElementById('display');
        try {
            if (display.value.trim() === '') {
                return;
            }
            const result = eval(display.value.replace(/sin\(|cos\(|tan\(/g, 'Math.$&'));
            if (isFinite(result)) {
                display.value = result;
            } else {
                display.value = '';
            }
        } catch (error) {
            display.value = 'Error';
        }
    }
}

function calculatePercentage() {
    if (isOn) {
        const display = document.getElementById('display');
        if (display.value.trim() !== '') {
            display.value = parseFloat(display.value) / 100;
        }
    }
}

function deleteLastChar() {
    if (isOn) {
        let displayValue = document.getElementById('display').value;
        document.getElementById('display').value = displayValue.slice(0, -1);
    }
}