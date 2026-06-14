function getUsers()    { return new Promise(r => setTimeout(() => r("Користувачі"), 1000)); }
function getProducts() { return new Promise(r => setTimeout(() => r("Товари"),       800));  }
function getOrders()   { return new Promise(r => setTimeout(() => r("Замовлення"),   600));  }

async function loadAll() {
    var start = Date.now();
    const results = await Promise.all([getUsers(), getProducts(), getOrders()]);
    console.log(results);
    console.log("Час:", Date.now() - start, "мс");
}

loadAll();
