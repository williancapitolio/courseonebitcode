const getBMI = (weight, height) => {
    return new Promise((resolve, reject) => {
        if (!Number(weight) || !Number(height)) {
            reject("Error: Informed data are not numeric!");
        };

        resolve(weight / (height * height));
    });
};

const situationBMI = (weight, height) => {
    getBMI(weight, height).then((result) => {
        console.log(`The BMI are ${result.toFixed(1)}`);

        if (result < 18.5) {
            console.log(`The result are THINNESS`);
        } else if (result >= 18.5 && result <= 24.9) {
            console.log(`The result are NORMAL`);
        } else if (result >= 25 && result <= 29.9) {
            console.log(`The result are OVERWEIGHT`);
        } else if (result >= 30 && result <= 39.9) {
            console.log(`The result are OBESITY`);
        } else if (result >= 40) {
            console.log(`The result are SEVERE OBESITY`);
        };
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log("Ending...");
    });

    console.log("Body Mass Index (BMI) Calculator");
};

situationBMI(100, 1.80);
