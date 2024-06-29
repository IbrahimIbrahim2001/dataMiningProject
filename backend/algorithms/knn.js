function knn(data, query) {
    const distances = [];
    for (const point of data) {
        const distance = Math.sqrt(
            Math.pow(query.bedrooms - point.beds, 2) +
            Math.pow(query.bathrooms - point.baths, 2) +
            Math.pow(query.sqft - point.sqft, 2) +
            Math.pow(query.yearBuilt - point.year_built, 2)
        );
        point['distance'] = distance;
        distances.push(point);
    }

    distances.sort((a, b) => a.distance - b.distance);
    return distances.slice(0, query.k).map(ele => ({
        ...ele,
        category: getCategory(ele.listPrice),
    }));
}

function getCategory(listPrice) {
    const cheapThreshold = 200000;
    const affordableThreshold = 400000;
    const expensiveThreshold = 600000;

    if (listPrice <= cheapThreshold) {
        return 'cheap';
    } else if (listPrice <= affordableThreshold) {
        return 'affordable';
    } else if (listPrice <= expensiveThreshold) {
        return 'expensive';
    } else {
        return 'luxury';
    }
}

module.exports = knn;