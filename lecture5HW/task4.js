console.log("1");
setTimeout(function() { console.log("2"); }, 0);
Promise.resolve().then(function() { console.log("3"); });
console.log("4");

// Порядок виводу: 1 → 4 → 3 → 2
//
// "1" і "4" — синхронний код, виконуються одразу зверху вниз.
// "3" — Promise.resolve().then() потрапляє до Microtask Queue.
//        Мікрозавдання виконуються одразу після поточного синхронного коду,
//        але ДО будь-яких макрозавдань.
// "2" — setTimeout(..., 0) потрапляє до Callback Queue (Macrotask Queue).
//        Макрозавдання виконуються лише після того, як стек викликів та
//        Microtask Queue повністю очищені.
