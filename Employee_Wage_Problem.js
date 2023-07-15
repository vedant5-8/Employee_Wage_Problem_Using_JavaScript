// UC3 - Function to get work hours

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

let empHrs = 0;

let empCheck = Math.floor(Math.random() * 10) % 3;

empHrs = getWorkingHours(empCheck);

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);