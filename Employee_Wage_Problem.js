// UC5 - Calculating wages till a condition of total working hours of 160 or 
// max days of 20 is reached for a month

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

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    
    let empCheck = Math.floor(Math.random() * 10) % 3;

    totalEmpHrs += getWorkingHours(empCheck);
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;

console.log("Total Days: " + totalWorkingDays);
console.log("Total Hrs: " + totalEmpHrs);
console.log("Emp Wage: " + empWage);