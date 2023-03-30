const getSimpleArithmeticMean = (...values) => {
    let sumValues = values.reduce((accumulator, value) => (accumulator + value), 0);
    return sumValues /= values.length;
};
