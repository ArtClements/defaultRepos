/*
this program will create a library of books that will then check the books in 
and out dependant on their current rental status. The program should contain:
Book class
properties of title and author as well as a checked out status holder
method titled isCheckedOut that returns true is checked out or false if not.
method titled CheckOut that displays '"Checking out "+book.title'
method titled CheckIn that displays '"Checking in "+book.title'

Library class
array titled catalog that holds 3 instances of the book object
method to fill the array titled addBook
method titled simulate that holds a while loop that runs 30 times, each
itteration checks to see if the book is checked out, and if it is check it in.

call Library.simulate to test
*/

	class Book{
	constructor(title, author, bookStatus){
	this.title = title;
	this.author = author;
	this.bookStatus = bookStatus;
	}
	isCheckedOut(){
	if (this.bookStatus === "checked in"){
	return this.bookStatus= true}
	if (this.bookStatus === "checked out"){
	return this.bookStatus = false}
	}
	CheckOut(){
		this.bookStatus = false
		console.log("Checking out "+this.title);
	}
	CheckIn(){
		this.bookStatus = true
		console.log("Checking in "+this.title);
	}
};
class Library{
	constructor(){
		this.catalog = [];
	};

	addBook(book){
		this.catalog.push(book);
	};
	
	simulate(){
		let x = 0
		let i = 0
			for (i; i<this.catalog.length; i++){
				while (x<30){
				x++
			this.catalog[i].isCheckedOut();
				if(this.catalog[i].bookStatus=true);
			this.catalog[i].CheckOut();
				if(this.catalog[i].bookStatus=false);
			this.catalog[i].CheckIn();
				};
			}
	};
};

var book1 = new Book("Code Complete", "Steve McConnell", "checked in");
var book2 = new Book("The Art of Unit Testing", "Roy Osherove", "checked in");
var book3 = new Book("Domain Driven Design", "Eric Evans", "checked in");
var library = new Library;
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.simulate()
