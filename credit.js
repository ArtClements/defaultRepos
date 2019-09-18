/*
Create a program that will determine the length and time needed to pay off a credit card balance,
 as well as the total interest paid.
 required components:
 -displayWelcome: a funtion that displays welcom and explains the program
 -calculateMinimumPayment: a function to calculate the minimum payment. it should take balance and interest rate as
 arguments and return the minimum payment
 -generatePaymentId: closure function that generates a new payment id for the payment. The function should remember
 the previous id and the new generated id should be the old one plus 1. Make the initial id 1.
 -processPaymentSchedule: a function to display the actual payment schedule. it should take the balance, monthly 
 interest rate and minimum payment as arguments. Use the following litteral values:
 card balance:1500
 interest rate: 18%
 minimum payments required: 2% of total balance.
 -displayPayment: a function that takes the payment object literal and displays it to console.
 the information doesnt state specifics so for this instance I will assume it is a simple interest and only applies
 once to the total value of the balance.
*/
var startingBalance = 1500.00;
var interestRate = 1.18;
var minimumPayRate = .02;
var minimumPayment = calculateMinimumPayment(startingBalance, interestRate, minimumPayRate);
var totalDue = generateBalancesDue(startingBalance, interestRate, minimumPayment);

function displayWelcome(){
	return "------------------------------------------------------------------------------------------------"+
	"\nWelcome to your credit card payment calcuator and schedule."+
	" This program will, \nbased off of your current balance,"+
	" interest rate as well as minimum payments \npercentages, provide"+
	" you your monthly minimum payments\n"+
	"------------------------------------------------------------------------------------------------"
};
function calculateMinimumPayment(startingBalance, interestRate, minimumPayRate){
	var minimumPayAmt=(startingBalance*interestRate)*minimumPayRate
	return minimumPayAmt.toFixed(2)
};
/*i think this is making progress, although i am doing something wrong. this adds an array of 50 values to totalDue,
which is the total amount of equal payments that would be included in this scenario, however the array when i logged
in console of chrome just shows Array(50). so i am filling an array with 50 objects, but i cant get that array return
back to main and display its contents. will see what i can get in notepad++ when i get home.
*/
function generateBalancesDue(startingBalance, interestRate, minimumPayment){
	totalIncludingInterest = startingBalance*interestRate
	var totalDueArray = [];
	while ( totalIncludingInterest> 0){
		totalDueArray.push(totalDueArray)
		totalIncludingInterest -=minimumPayment;
	}
	return totalDueArray[];
};
function generatePaymentId(){
	
};
function processPaymentSchedule(){

};
function displayPayment(){

};
