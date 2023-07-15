// UC6 - Array Helper Function

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

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    
    let empCheck = Math.floor(Math.random() * 10) % 3;

    let empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;

    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);

console.log("Total Days: " + totalWorkingDays);
console.log("Total Hrs: " + totalEmpHrs);
console.log("Emp Wage: " + empWage);

// UC7A-Calculate total wage using Array for each traversal or reduce method

let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);

console.log('\nUC 7A');
console.log("Total Days: " + totalWorkingDays);
console.log("Total Hrs: " + totalEmpHrs);
console.log("Emp Wage: " + totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC 7A");
console.log("Employee wage with Reduce: " + empDailyWageArr.reduce(totalWages, 0));

// UC 7B - Show the day along with daily wage using Array map helper function 

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("\nUC 7B");
console.log("Daily Wage Map");
console.log(mapDayWithWageArr);

// UC 7C - Show days when full time wage of 160 were earned

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("\nUC 7C");
console.log("Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when full time wage was earned using function

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("\nUC 7D");
console.log("First Time Full Time Wage was earned on Day: " + mapDayWithWageArr.find(findFullTimeWage));

// UC 7E - Check if Every Element of Full Time Wage is truely holding Full time wage 

function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

console.log("\nUC 7E");
console.log("Check If Any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G - Find the number of days the employee worked

function totalDaysWorked(numberOfDays, dailyWage) {
    if (dailyWage > 0) return numberOfDays + 1;
    return numberOfDays;
}

console.log("\nUC 7G");
console.log("Number of Days Employee Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));
