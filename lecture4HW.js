// ============================================================
// Завдання 1
// ============================================================
/**
 Є масив чисел. Знайди суму всіх елементів масиву.

 Очікуваний результат:
 sumNumbers([1, 2, 3, 4, 5]) => 15
 sumNumbers([10, 20, -5]) => 25
 */

function sumNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumNumbers([1, 2, 3, 4, 5]));
console.log(sumNumbers([10, 20, -5]));

// ============================================================
// Завдання 2
// ============================================================
/**
 Є масив рядків із іменами студентів.
 Відфільтруй тільки ті імена, які починаються на літеру "А" (або "а").
 Поверни новий масив.

 Очікуваний результат:
 filterByLetter(["Андрій", "Богдан", "Аліна", "Олег", "Антон"]) => ["Андрій", "Аліна", "Антон"]
 */

function filterByLetter(names) {
    let filteredNames = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i].toLowerCase().startsWith("а")) {
            filteredNames.push(names[i]);
        }
    }
    return filteredNames;
}

console.log(filterByLetter(["Андрій", "Богдан", "Аліна", "Олег", "Антон"]));


// ============================================================
// Завдання 3
// ============================================================
/**
 Є масив чисел. Поверни новий масив, де кожне число замінено на його квадрат.
 Числа, які менше нуля, виключи з результату.

 Очікуваний результат:
 squarePositive([1, -2, 3, -4, 5]) => [1, 9, 25]
 */

function squarePositive(arr) {
    return arr
        .filter(num => num >= 0)
        .map(num => num * num);
}

console.log(squarePositive([1, -2, 3, -4, 5]));

// ============================================================
// Завдання 4
// ============================================================
/**
 Є масив об'єктів, де кожен об'єкт описує товар у магазині.
 Знайди всі товари, ціна яких менше 100 грн, і поверни масив тільки їхніх назв.

 Очікуваний результат:
 getCheapProducts(products) => ["Ручка", "Олівець"]
 */

var products = [
    { name: "Ноутбук", price: 25000 },
    { name: "Ручка",   price: 15 },
    { name: "Олівець", price: 8 },
    { name: "Монітор", price: 8000 }
];

function getCheapProducts(arr) {
    return arr
        .filter(product => product.price < 100)
        .map(product => product.name);
}

console.log(getCheapProducts(products));

// ============================================================
// Завдання 5
// ============================================================
/**
 Напиши функцію, яка отримує масив чисел і повертає об'єкт із такими властивостями:
   - min  — мінімальне число
   - max  — максимальне число
   - sum  — сума всіх чисел
   - avg  — середнє значення (округлити до 2 знаків після коми)

 Очікуваний результат:
 getStats([3, 7, 1, 9, 4]) => { min: 1, max: 9, sum: 24, avg: 4.80 }
 */

function getStats(arr) {
    const result = {}; 
    result.min = Math.min(...arr);
    result.max = Math.max(...arr);
    result.sum = arr.reduce((acc, num) => acc + num, 0);
    result.avg = parseFloat((result.sum / arr.length).toFixed(2));
    return result;
}

console.log(getStats([3, 7, 1, 9, 4]));

// ============================================================
// Завдання 6
// ============================================================
/**
 Є масив об'єктів — список студентів із їхніми оцінками.
 Відсортуй студентів за оцінкою від найвищої до найнижчої
 і виведи їхні імена у новому масиві.

 Очікуваний результат:
 sortByGrade(students) => ["Оксана", "Михайло", "Дарина", "Іван"]
 */

var students = [
    { name: "Іван",    grade: 72 },
    { name: "Оксана",  grade: 95 },
    { name: "Михайло", grade: 88 },
    { name: "Дарина",  grade: 79 }
];

function sortByGrade(arr) {
    return arr
        .sort((a, b) => b.grade - a.grade)
        .map(student => student.name);
}

console.log(sortByGrade(students));


// ============================================================
// Завдання 7
// ============================================================
/**
 Напиши функцію, яка об'єднує два масиви, видаляє дублікати
 і повертає відсортований результат за зростанням.

 Очікуваний результат:
 mergeUnique([1, 3, 5], [3, 5, 7]) => [1, 3, 5, 7]
 mergeUnique([2, 2, 4], [4, 6])    => [2, 4, 6]
 */

function mergeUnique(arr1, arr2) {
    // Ваш код тут:
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

console.log(mergeUnique([1, 3, 5], [3, 5, 7]));
console.log(mergeUnique([2, 2, 4], [4, 6]));

// ============================================================
// Завдання 8
// ============================================================
/**
 Є об'єкт, що описує людину. Напиши функцію, яка:
   1. Перевіряє, чи є в об'єкта властивість "email"
   2. Якщо є — виводить "Email: <значення>"
   3. Якщо немає — додає властивість email зі значенням "не вказано" і виводить повідомлення про це

 Очікуваний результат (для першого об'єкта):
 checkEmail(person1) => "Email: john@example.com"
 Очікуваний результат (для другого об'єкта):
 checkEmail(person2) => "Email не вказано, додано значення за замовчуванням"
 */

var person1 = { name: "Джон",  age: 30, email: "john@example.com" };
var person2 = { name: "Марія", age: 25 };

function checkEmail(person) {
    if (person.email) {
        console.log(`Email: ${person.email}`);
    } else {
        person.email = "не вказано";
        console.log("Email не вказано, додано значення за замовчуванням");
    }
}

checkEmail(person1);
checkEmail(person2);
console.log(person2);

// ============================================================
// Завдання 9
// ============================================================
/**
 Є масив рядків. Напиши функцію, яка групує слова за їхньою довжиною
 і повертає об'єкт, де ключ — довжина слова, значення — масив слів із такою довжиною.

 Очікуваний результат:
 groupByLength(["cat", "dog", "elephant", "rat", "ox", "emu"])
   => { 2: ["ox"], 3: ["cat", "dog", "rat", "emu"], 8: ["elephant"] }
 */

function groupByLength(words) {
    const result = {};
    words.forEach(word => {
        if(!result[word.length]) {
            result[word.length] = [];
        }
        result[word.length].push(word);
    })
    return result;
}

console.log(groupByLength(["cat", "dog", "elephant", "rat", "ox", "emu"]));

// ============================================================
// Завдання 10 (підвищена складність ⭐)
// ============================================================
/**
 Є масив об'єктів — замовлення інтернет-магазину.
 Кожне замовлення містить: id, customer (ім'я покупця), items (масив товарів),
 де кожен товар має name і price.

 Напиши функцію getOrderReport(orders), яка повертає масив об'єктів із такими полями:
   - customer   — ім'я покупця
   - totalPrice — загальна сума замовлення
   - itemCount  — кількість товарів у замовленні
   - mostExpensive — назва найдорожчого товару

 Відсортуй результат за totalPrice від найбільшої до найменшої.

 Очікуваний результат:
 [
   { customer: "Оксана", totalPrice: 1350, itemCount: 3, mostExpensive: "Клавіатура" },
   { customer: "Богдан", totalPrice: 200,  itemCount: 2, mostExpensive: "Мишка" },
   { customer: "Іванка", totalPrice: 50,   itemCount: 1, mostExpensive: "Кабель USB" }
 ]
 */

var orders = [
    {
        id: 1,
        customer: "Богдан",
        items: [
            { name: "Мишка",     price: 150 },
            { name: "Кабель USB", price: 50 }
        ]
    },
    {
        id: 2,
        customer: "Оксана",
        items: [
            { name: "Клавіатура", price: 800 },
            { name: "Мишка",      price: 300 },
            { name: "Килимок",    price: 250 }
        ]
    },
    {
        id: 3,
        customer: "Іванка",
        items: [
            { name: "Кабель USB", price: 50 }
        ]
    }
];

function getOrderReport(orders) {
    const result = [];
    orders.forEach(order => {
        const totalPrice = order.items.reduce((sum, item) => sum + item.price, 0);
        const itemCount = order.items.length;
        const mostExpensiveItem = order.items.reduce((max, item) => item.price > max.price ? item : max, { price: 0 }).name;
        result.push({
            customer: order.customer,
            totalPrice: totalPrice,
            itemCount: itemCount,
            mostExpensive: mostExpensiveItem
        });
    });
    return result.sort((a, b) => b.totalPrice - a.totalPrice);
}

console.log(getOrderReport(orders));