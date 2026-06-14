var attempt = 0;
function unstable() {
    attempt++;
    console.log(`Спроба ${attempt}...`);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (attempt < 3) reject(new Error("невдача"));
            else             resolve("Дані отримано");
        }, 300);
    });
}

async function retryRequest(fn, retries) {
    for (let i = 0; i < retries; i++) {
        try {
            const result = await fn();
            console.log("успіх!");
            return result;
        } catch (e) {
            console.log(e.message);
            if (i === retries - 1) throw new Error("Всі спроби вичерпано");
        }
    }
}

retryRequest(unstable, 5)
    .then(r  => console.log("Результат:", r))
    .catch(e => console.log("Помилка:", e.message));
