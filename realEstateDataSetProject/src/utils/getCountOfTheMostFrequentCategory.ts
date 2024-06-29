export const getCountOfTheMostFrequentCategory = (category: (string | undefined)[]) => {
    let myCategory;
    const cheapObject = {
        Objecategory: 'cheap',
        cheap: 0,
    }
    const affordableObject = {
        Objecategory: 'affordable',
        affordable: 0
    };
    const luxuryObject = {
        Objecategory: 'luxury',
        luxury: 0,
    };
    const expensiveObject = {
        Objecategory: 'expensive',
        expensive: 0,
    };

    for (let i = 0; i < category.length; i++) {
        if (category[i] === 'luxury') {
            luxuryObject.luxury++;
        } else if (category[i] === 'cheap') {
            cheapObject.cheap++;
        } else if (category[i] === "affordable") {
            affordableObject.affordable++;
        } else {
            expensiveObject.expensive++;
        }
    }

    const maxCount = Math.max(cheapObject.cheap, affordableObject.affordable, luxuryObject.luxury, expensiveObject.expensive);

    if (maxCount === cheapObject.cheap) {
        myCategory = 'cheap';
    } else if (maxCount === affordableObject.affordable) {
        myCategory = 'affordable';
    } else if (maxCount === luxuryObject.luxury) {
        myCategory = 'luxury';
    } else {
        myCategory = 'expensive';
    }

    return myCategory;
}