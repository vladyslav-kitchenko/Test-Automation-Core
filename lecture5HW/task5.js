function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("Початок");
    await delay(1000);
    console.log("Крок 1");
    await delay(500);
    console.log("Крок 2");
    console.log("Кінець");
}

run();
