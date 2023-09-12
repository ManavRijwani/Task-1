function convertToFar() {
    const celsiusInput = document.getElementById("celsius");
    const result = document.getElementById("result");

    if (!celsiusInput.value) {
        result.innerText = "Please enter a value.";
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;

    result.innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}
