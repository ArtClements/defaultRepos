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
 Each time a new payment line is calculated, create an object literal with properties of the year,
 balance, payment id and interest paid.
 -displayPayment: a function that takes the payment object literal and displays it to console.
 the information doesnt state specifics so for this instance I will assume it is a simple interest and only applies
 once to the total value of the balance.
*/
var startingBalance = 1500.00;
var interestRate = .18;
var minimumPayRate = .02;
var minimumPayment = calculateMinimumPayment(startingBalance, interestRate, minimumPayRate);
var totalDue = ((startingBalance*interestRate)+startingBalance)-minimumPayment;
var runningBalance = generateRunningBalance(totalDue, minimumPayment);
var paymentId = generatePaymentId();
var totalPayments = runningBalance.length;
var paymentYear = generateYear(totalPayments);
var interestTotal = generateInterestTotal(startingBalance, interestRate, totalPayments);


function displayWelcome(){
	return "------------------------------------------------------------------------------------------------"+
	"\nWelcome to your credit card payment calcuator and schedule."+
	" This program will, \nbased off of your current balance,"+
	" interest rate as well as minimum payments \npercentages, provide"+
	" you your monthly minimum payments\n"+
	"------------------------------------------------------------------------------------------------"
};

function generateRunningBalance(totalDue, minimumPayment){
	var runningBalance = [];
	while (totalDue> 0){
		runningBalance.push(totalDue.toFixed(2))
		totalDue -= minimumPayment;
		};
	return runningBalance;
}

function calculateMinimumPayment(startingBalance, interestRate, minimumPayRate){
	var minimumPayAmt=((startingBalance*interestRate)+startingBalance)*minimumPayRate
	return minimumPayAmt.toFixed(2)
};

function generateInterestTotal(startingBalance, interestRate, totalPayments){
	interestTotal = []
	monthlyInterestCalculation = (startingBalance*interestRate)/totalPayments
	totalMontlyInterest = 0
	for (i=0; i<totalPayments; i++){
		totalMontlyInterest += monthlyInterestCalculation
		interestTotal.push(totalMontlyInterest.toFixed(2));}
	return interestTotal;
}

function generateYear(totalPayments){
	paymentYear = [];
	for (i=0; i <totalPayments; i++){
			if (i => 0 || i < 13){
			paymentYear.push("1");}
			if (i > 12 || i < 25){
			paymentYear.push("2");}
			if (i > 24 || i < 37){
			paymentYear.push("3");}
			if (i > 35|| i < 49){
			paymentYear.push("4");}
			if (i =>48){
			paymentYear.push("5+");}
	return paymentYear
};
}

function generatePaymentId(){
	paymentId = [];
	for (i=1; i<runningBalance.length+1; i++){
		paymentId.push(i);}
	return paymentId;
};

function processPaymentSchedule(){
for (i=0; i<totalPayments; i++){
	console.log(paymentYear[i]+"\t"+runningBalance[i]+"\t\t"+paymentId[i]+"\t\t"+interestTotal[i]+"\n")
	}
};

function displayPayment(){
return "Year\tBalance\t\tPayment ID\tInterest Paid\n"
};
console.log(paymentYear.length);
