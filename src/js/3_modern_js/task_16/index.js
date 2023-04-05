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

    const dateOfBirthArray = dateOfBirth.split("/");

    const dateOfBirthResult = `${dateOfBirthArray[2]}-${dateOfBirthArray[1]}-${dateOfBirthArray[0]}`;

    const birthdayDayjs = dayjs(dateOfBirthResult).format("YYYY-MM-DD");

    const today = dayjs().format("YYYY-MM-DD");

    const currentAge = dayjs(today).diff(dateOfBirthResult, "year");

    const nextBirthday = dayjs(birthdayDayjs).add((currentAge + 1), "year").format("YYYY-MM-DD");

    const daysToNextBirthday = dayjs(nextBirthday).diff(today, "day");

    const todayFormat = dayjs(today).format("DD/MM/YYYY");

    const nextBirthdayFormat = dayjs(nextBirthday).format("DD/MM/YYYY");

    return console.log(`
        - Today is ${todayFormat}
        - Your birthday is ${dateOfBirth}
        - Your age is ${currentAge}
        - Your next birthday is ${nextBirthdayFormat}
        - ${daysToNextBirthday} days until your next birthday
    `);
};

datesWithDayjs("25-10-1998");
datesWithDayjs("25/10/1998");
