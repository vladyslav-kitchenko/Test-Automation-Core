var slowRequest = new Promise(r => setTimeout(() => r("Повільні дані"), 1500));
var fastRequest  = new Promise(r => setTimeout(() => r("Швидкі дані"),   300));

function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout!")), ms)
    );
    return Promise.race([promise, timeout]);
}

withTimeout(slowRequest, 500)
    .then(r  => console.log(r))
    .catch(e => console.log(e.message));

withTimeout(fastRequest, 2000)
    .then(r  => console.log(r))
    .catch(e => console.log(e.message));
