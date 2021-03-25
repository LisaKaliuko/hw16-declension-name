'use strict';

const declensionName = (numberOfName) => {
    if(isNaN(numberOfName)) {
        console.log(`Введите целое число!`);
    } else {
        if(numberOfName <= 20) {
            if(numberOfName === 0 || numberOfName >= 5 && numberOfName <= 20) {
                console.log(`${numberOfName} Лиз`);
            } else if(numberOfName === 1) {
                console.log(`${numberOfName} Лиза`);
            } else if(numberOfName >= 2 && numberOfName <= 4) {
                console.log(`${numberOfName} Лизы`);
            }
        } else {
            const remainder = numberOfName % 10;

            if(remainder === 1) {
                console.log(`${numberOfName} Лиза`);
            } else if(remainder >= 2 && remainder <= 4) {
                console.log(`${numberOfName} Лизы`);
            } else if(remainder === 0 || remainder >= 5 && remainder <= 9) {
                console.log(`${numberOfName} Лиз`);
            }
        }   
    }
}

declensionName(1000);
declensionName(1);
declensionName(22);
declensionName(15);
declensionName(18);
declensionName(78546);
declensionName(58573);
declensionName(696040);
declensionName(1982371);
declensionName(0);
declensionName('834u489');