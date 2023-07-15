// UC2 - Calculating employee wage

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const Part_Time_Hours = 4;
const Full_Time_Hours = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;

let empCheck = Math.floor(Math.random() * 10) % 3;

switch (empCheck) {
    case IS_PART_TIME:
        empHrs = Part_Time_Hours;
        break;
    case IS_FULL_TIME:
        empHrs = Full_Time_Hours;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);