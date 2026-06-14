const calculator = {
    add:      (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide:   (a, b) => {
        if (b === 0) throw new Error("Ділення на нуль");
        return a / b;
    }
};

export default calculator;
