const getSimpleArithmeticMean = (...values) => {
    const sumValues = values.reduce((accumulator, value) => accumulator + value, 0);

    return sumValues / values.length;
};

const getWeightedArithmeticMean = (...values) => {
    const sumNumberPlusWeigh = values.reduce((accumulator, { n, p }) => (n * (p ?? 1)) + accumulator, 0);

    const sumWeights = values.reduce((accumulator, { p }) => (accumulator + (p ?? 1)), 0);

    return sumNumberPlusWeigh / sumWeights
};

const getMedian = (...values) => {
    values.sort((a, b) => a - b);

    if (values.length % 2 === 1) {
        const middleArray = (values.length - 1) / 2;

        return values[middleArray];
    };

    if (values.length % 2 === 0) {
        const middleArrayLeft = values[(values.length / 2) - 1];
        const middleArrayRight = values[values.length / 2];

        return getSimpleArithmeticMean(middleArrayLeft, middleArrayRight);
    };
};

function getMode(...values) {
    const quantities = values.map(value => [
        value,
        values.filter(val => value === val).length
    ]);
    quantities.sort((a, b) => b[1] - a[1]);
    return quantities[0][0];
};

console.log(getSimpleArithmeticMean(2, 6, 3, 7, 4));

console.log(getWeightedArithmeticMean({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 }));

console.log(getMedian(2, 4, 5, 7, 42, 99));
console.log(getMedian(15, 14, 8, 7, 3));

console.log(getMode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));
