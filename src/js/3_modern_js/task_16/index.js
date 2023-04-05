"use strict";

const dayjs = require("dayjs");

const customParseFormat = require("dayjs/plugin/customParseFormat");

dayjs.extend(customParseFormat);

const datesWithDayjs = (dateOfBirth) => {
    //validate with regex && validate with dayjs().isValid()
    const validDateOfBirth = /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/;

    if (!validDateOfBirth.test(dateOfBirth) && !dayjs(dateOfBirth, "DD/MM/YYYY", true).isValid()) {
        return console.log(`
        - ${dateOfBirth} not a valid date of birth. Try the format: DD/MM/YYYY
        `);
    };

    //const dateOfBirthResult = `${dateOfBirthArray[2]}-${dateOfBirthArray[1]}-${dateOfBirthArray[0]}`;
    const dateOfBirthResult = dateOfBirth.split("/").reverse().reduce((acc, item) => `${acc}-${item}`);

    const dateOfBirthInDayjs = dayjs(dateOfBirthResult).format("YYYY-MM-DD");

    const today = dayjs().format("YYYY-MM-DD");
    const todayFormat = dayjs(today).format("DD/MM/YYYY");

    const currentAge = dayjs(today).diff(dateOfBirthResult, "year");

    const nextBirthday = dayjs(dateOfBirthInDayjs).add((currentAge + 1), "year").format("YYYY-MM-DD");
    const nextBirthdayFormat = dayjs(nextBirthday).format("DD/MM/YYYY");

    const daysToNextBirthday = dayjs(nextBirthday).diff(today, "day");

    return console.log(`
        - Today is ${todayFormat}
        - Your birthday is ${dateOfBirth}
        - Your age is ${currentAge} years
        - Your next birthday is ${nextBirthdayFormat}
        - ${daysToNextBirthday} days until your next birthday
    `);
};

datesWithDayjs("25-10-1998");
datesWithDayjs("25/10/1998");
