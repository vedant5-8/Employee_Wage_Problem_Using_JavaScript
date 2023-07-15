// UC4 -Calculating wages for month assuming 20 working days in a month

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return Part_Time_Hours;
        case IS_FULL_TIME:
            return Full_Time_Hours;
        default:
            return 0;
    }
}

const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;

    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " + empHrs);
console.log("Emp Wage: " + empWage);