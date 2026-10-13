const name = "Rahul";
const rollno= 21;
const corse ="BCA";

const marks1= 80;
const marks2= 90;
const marks3= 85;

const totalmarks= marks1+marks2+marks3;
const percentage= (totalmarks/300)*100;

const report=`
------------STUDENT REPORT CARD------------
Name: ${name}
Roll No: ${rollno}
Course: ${corse}
marks1: ${marks1}
marks2: ${marks2}
marks3: ${marks3}
Total Marks: ${totalmarks}
Percentage: ${percentage.toFixed(2)}%
------------------------------------------`;
console.log(report);