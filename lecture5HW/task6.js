function fetchUser(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (id === 1) resolve({ id: 1, name: "Іван" });
            else          reject(new Error("Користувача не знайдено"));
        }, 500);
    });
}

async function getUser(id) {
    try {
        const user = await fetchUser(id);
        console.log(`Користувач: ${user.name}`);
    } catch (e) {
        console.log(`Помилка: ${e.message}`);
    }
}

getUser(1);
getUser(99);
