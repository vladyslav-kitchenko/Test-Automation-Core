function fetchItem(id) {
    return new Promise(r => setTimeout(() => r({ id, data: `item_${id}` }), 400));
}

async function batchRequests(ids, batchSize) {
    const results = [];
    for (let i = 0; i < ids.length; i += batchSize) {
        const batch = ids.slice(i, i + batchSize);
        console.log("Пакет:", batch);
        const batchResults = await Promise.all(batch.map(id => fetchItem(id)));
        results.push(...batchResults);
    }
    return results;
}

batchRequests([1, 2, 3, 4, 5], 2)
    .then(results => console.log("Всі дані:", results));
