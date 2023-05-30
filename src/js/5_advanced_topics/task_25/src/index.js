const getBMI = async (weight, height) => {
    if (!Number(weight) || !Number(height)) {
        return Promise.reject(new Error("Error: Informed data are not numeric!"));
    };

    return weight / (height * height);
};

const situationBMI = async (weight, height) => {
    try {
        const BMIResult = await getBMI(weight, height);
        console.log(`Calculating Body Mass Index (BMI) for Weight ${weight} and Height ${height}`);
        console.log(`BMI: ${BMIResult.toFixed(1)}`);

        if (BMIResult < 18.5) console.log("Result: THINNESS");
        else if (BMIResult < 25) console.log("Result: NORMAL");
        else if (BMIResult < 30) console.log("Result: OVERWEIGHT");
        else if (BMIResult < 40) console.log("Result: OBESITY");
        else if (BMIResult >= 40) console.log("Result: SEVERE OBESITY");
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log("Ending...");
    };
};

situationBMI(100, 1.80);
