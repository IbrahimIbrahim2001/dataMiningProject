function distance(point1, point2) {
    return Math.sqrt(
        Math.pow(point1.beds - point2.beds, 2) +
        Math.pow(point1.baths - point2.baths, 2) +
        Math.pow(point1.sqft - point2.sqft, 2) +
        Math.pow(point1.year_built - point2.year_built, 2) +
        Math.pow(point1.listPrice - point2.listPrice, 2)
    );
}


function centroidPoint(cluster) {
    const sum = { beds: 0, baths: 0, sqft: 0, year_built: 0, listPrice: 0 };
    for (let i = 0; i < cluster.length; i++) {
        sum.beds += cluster[i].beds;
        sum.baths += cluster[i].baths;
        sum.sqft += cluster[i].sqft;
        sum.year_built += cluster[i].year_built;
        sum.listPrice += cluster[i].listPrice;
    }
    for (const key in sum) {
        sum[key] /= cluster.length;
    }
    return sum;
}

// function kmeans(dataset, k) {
//     const centroids = [];
//     const centroidsIds = [];
//     for (let i = 0; i < k; i++) {
//         const index = Math.floor(Math.random() * dataset.length);
//         centroidsIds.push(index + 1);
//         centroids.push(dataset[index]);
//     }
//     const clusters = new Array(k).fill().map(() => []);
//     for (let i = 0; i < dataset.length; i++) {
//         let minDist = Infinity;
//         let clusterIndex = -1;
//         for (let j = 0; j < k; j++) {
//             const dist = distance(dataset[i], centroids[j]);
//             if (dist < minDist) {
//                 minDist = dist;
//                 clusterIndex = j;
//             }
//         }
//         clusters[clusterIndex].push(dataset[i]);
//     }

//     for (let i = 0; i < k; i++) {
//         if (clusters[i].length > 0) {
//             centroids[i] = centroidPoint(clusters[i]);
//         }
//     }

//     return {
//         clusters, centroidsIds
//     };
// }

function kmeans(dataset, k) {
    const centroids = [];
    const centroidsIds = [];
    for (let i = 0; i < k; i++) {
        const index = Math.floor(Math.random() * dataset.length);
        centroidsIds.push(index + 1); // Use index directly
        centroids.push(dataset[index]);
    }

    let clusters = new Array(k).fill().map(() => []);
    let hasConverged = false;

    while (!hasConverged) {
        for (let i = 0; i < dataset.length; i++) {
            let minDist = Infinity;
            let clusterIndex = -1;
            for (let j = 0; j < k; j++) {
                const dist = distance(dataset[i], centroids[j]);
                if (dist < minDist) {
                    minDist = dist;
                    clusterIndex = j;
                }
            }
            clusters[clusterIndex].push(dataset[i]);
        }
        hasConverged = true;
        for (let i = 0; i < k; i++) {
            if (Array.isArray(centroids[i])) {
                const newCentroid = centroidPoint(clusters[i]);
                const isSameCentroid = centroids[i].every((val, index) => val === newCentroid[index]);
                if (!isSameCentroid) {
                    hasConverged = false;
                    centroids[i] = newCentroid;
                }
            }
        }
        if (!hasConverged) {
            clusters = new Array(k).fill().map(() => []);
        }
    }
    return {
        clusters, centroidsIds
    };
}

module.exports = kmeans;