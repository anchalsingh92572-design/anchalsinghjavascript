<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Programs</title>
</head>
<body>

<h2>JavaScript Practical Programs</h2>
<p>Press F12 and open Console to see the output.</p>

<script>

// 1. Arithmetic Operations on Two Numbers
let a = 10, b = 5;
console.log("1. Arithmetic Operations");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);


// 2. Comparison Operators
console.log("\n2. Comparison Operators");
console.log("Equal:", a == b);
console.log("Not Equal:", a != b);
console.log("Greater:", a > b);
console.log("Less:", a < b);
console.log("Greater or Equal:", a >= b);
console.log("Less or Equal:", a <= b);


// 3. Logical Operators (&&, ||, !)
console.log("\n3. Logical Operators");
console.log(true && false);
console.log(true || false);
console.log(!true);


// 4. Check Positive Number
let n = 8;
console.log("\n4. Check Positive Number");
if (n > 0)
    console.log("Positive Number");
else
    console.log("Not a Positive Number");


// 5. Check Even or Odd
console.log("\n5. Even or Odd");
if (n % 2 == 0)
    console.log("Even Number");
else
    console.log("Odd Number");


// 6. Voting Eligibility
let age = 20;
console.log("\n6. Voting Eligibility");
if (age >= 18)
    console.log("Eligible for Voting");
else
    console.log("Not Eligible for Voting");


// 7. Positive, Negative or Zero
console.log("\n7. Positive, Negative or Zero");
if (n > 0)
    console.log("Positive");
else if (n < 0)
    console.log("Negative");
else
    console.log("Zero");


// 8. Calculate Grade Using Else-If
let marks = 85;
console.log("\n8. Grade Calculation");
if (marks >= 90)
    console.log("Grade A+");
else if (marks >= 80)
    console.log("Grade A");
else if (marks >= 70)
    console.log("Grade B");
else if (marks >= 60)
    console.log("Grade C");
else if (marks >= 40)
    console.log("Grade D");
else
    console.log("Fail");


// 9. Largest of Two Numbers
console.log("\n9. Largest of Two Numbers");
if (a > b)
    console.log(a, "is largest");
else if (b > a)
    console.log(b, "is largest");
else
    console.log("Both are equal");


// 10. Check Leap Year
let year = 2024;
console.log("\n10. Leap Year");
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
    console.log("Leap Year");
else
    console.log("Not a Leap Year");


// 11. Print Numbers from 1 to 10
console.log("\n11. Numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 12. Multiplication Table
let num = 5;
console.log("\n12. Multiplication Table");
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


// 13. Sum of First N Natural Numbers
let N = 10, sum = 0;
console.log("\n13. Sum of Natural Numbers");
for (let i = 1; i <= N; i++) {
    sum += i;
}
console.log("Sum:", sum);


// 14. Print Even Numbers Between 1 and 50
console.log("\n14. Even Numbers from 1 to 50");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}


// 15. Count Numbers Divisible by 3 Between 1 and 100
let count = 0;
console.log("\n15. Numbers Divisible by 3");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
        count++;
    }
}
console.log("Total Count:", count);


// 16. Largest of Three Numbers
let x = 15, y = 25, z = 10;
console.log("\n16. Largest of Three Numbers");
if (x >= y && x >= z)
    console.log("Largest:", x);
else if (y >= x && y >= z)
    console.log("Largest:", y);
else
    console.log("Largest:", z);


// 17. Check Divisibility by Both 3 and 5
let value = 15;
console.log("\n17. Divisibility by 3 and 5");
if (value % 3 == 0 && value % 5 == 0)
    console.log("Divisible by Both 3 and 5");
else
    console.log("Not Divisible by Both 3 and 5");


// 18. Factorial Using For Loop
let factNum = 5, factorial = 1;
console.log("\n18. Factorial");
for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log("Factorial:", factorial);


// 19. Print Numbers from 50 to 1 in Reverse
console.log("\n19. Reverse Order");
for (let i = 50; i >= 1; i--) {
    console.log(i);
}


// 20. Sum of All Odd Numbers Between 1 and 100
let oddSum = 0;
console.log("\n20. Sum of Odd Numbers");
for (let i = 1; i <= 100; i += 2) {
    oddSum += i;
}
console.log("Sum of Odd Numbers:", oddSum);


// 21. End of All Programs
console.log("\nAll 21 Programs Executed Successfully!");

</script>

</body>
</html>
