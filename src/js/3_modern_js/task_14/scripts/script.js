const getSimpleArithmeticMean = (...values) => {
    let sumValues = values.reduce((accumulator, value) => (accumulator + value), 0);
    return sumValues /= values.length;
};

const getWeightedArithmeticMean = (...values) => {
    const sumNumberPlusWeigh = values.reduce((accumulator, value) => (value.n * value.p) + accumulator, 0);
    const sumWeights = values.reduce((accumulator, value) => (accumulator + value.p), 0);
    return sumNumberPlusWeigh / sumWeights
};

console.log(getSimpleArithmeticMean(2, 6, 3, 7, 4));

console.log(getWeightedArithmeticMean({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 }));
