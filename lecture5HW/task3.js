async function calculate(a, b) {
    console.log("Завантаження калькулятора...");
    try {
        const { default: calc } = await import('./calculator.js');
        console.log(`${a} + ${b} = ${calc.add(a, b)}`);
        console.log(`${a} - ${b} = ${calc.subtract(a, b)}`);
        console.log(`${a} * ${b} = ${calc.multiply(a, b)}`);
        console.log(`${a} / ${b} = ${calc.divide(a, b).toFixed(2)}`);
    } catch (e) {
        console.log(`Помилка: ${e.message}`);
    }
}

(async () => {
    await calculate(10, 3);
    console.log("---");
    await calculate(10, 0);
})();
