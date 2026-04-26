// Task 1
function getAge(age) {
    if (!Number.isFinite(age) || age < 1) {
        return "Не валідне значення";
    } else if (age < 12) {
        return "Дитина";
    } else if (age <= 17) {
        return "Підліток";
    } else if (age <= 64) {
        return "Дорослий";
    } else {
        return "Пенсіонер";
    }
}
// Task 2
function getGrade(grade) {
    switch(true) {
        case (grade >=90 && grade <= 100):
            return "A";
        case (grade >=70 && grade < 90):
            return "B";
        case (grade >=50 && grade < 70):
            return "C";
        case (grade < 50 && grade >= 0):
            return "F";
        default:
            return "Не валідне значення";
    }
}
// Task 3
let month = 10;
switch(month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
    default:
        console.log("Невірний місяць");
}
// Task 4
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        continue;
    } else if (i % 3 === 0) {
        console.log('Fizz');
        continue;
    } else if (i % 5 === 0) {
        console.log('Buzz');
        continue;
    } else {
        console.log(i);
    }
}
// Task 5
let number = 91;
let divider = 2;
while (divider < number) {
    if (number % divider === 0) {
        console.log("Найменший дільник: "+divider);
        break;
    }
    divider++;
}
// Task 6
for (let i = 1; i <= 100; i++) {
    if (String(i).includes('3') || String(i).includes('7')) {
        continue;
    }
    console.log(i);
}
// Task 7
function greet(name = "Гість", greeting = "Привіт") {
    return `${greeting}, ${name}!`;
}
// Task 8
let calculate;
let operation = "multiply";
switch(operation) {
    case "add":
        calculate = (a, b) => a + b;
        break;
    case "subtract":
        calculate = (a, b) => a - b;
        break;
    case "multiply":
        calculate = (a, b) => a * b;
        break;
    case "divide":
        calculate = (a, b) => a / b;
        break;
}
console.log(calculate(6, 7));
// Task 9
function repeatAction(n, callback) {
    for (let i = 0; i < n; i++) {
        callback(); 
    }
}
// Task 10
function generatePassword(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
