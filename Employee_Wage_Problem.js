// UC1 - Check employee presence

const Is_Absent = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == Is_Absent) {
    console.log('Employee is absent.');
    return;
}
else {
    console.log('Employee is present.')
}