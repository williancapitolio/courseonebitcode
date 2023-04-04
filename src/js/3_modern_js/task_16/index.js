"use strict";

const datesWithDaysjs = birthday => {
    const validBirthday = /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/;

    if (!validBirthday.test(birthday)) {
        console.log(`${birthday} not a valid birthday. Try the format: dd/mm/yyyy`);
        return;
    };

    console.log(birthday);
    
    /* const currentAge = "";
    const nextBirthday = "";
    const daysToNextBirthday = ""; */
};

datesWithDaysjs("25/10/1998");
