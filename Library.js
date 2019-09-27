/*
this program will create a library of books that will then check the books in 
and out dependant on their current rental status. The program should contain:
Book class
properties of title and author
method titled isCheckedOut that returns true is checked out or false if not.
method titled CheckOut that displays '"Checking out "+book.title'
method titled CheckIn that displays '"Checking in "+book.title'

Library class
array titled catalog that holds 3 instances of the book object
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
};
Book.prototype.isCheckedOut = function(book){
	if (Book.bookStatus === "checked in"){
	statusIs= true}
	if (Book.bookStatus === "checked out"){
	statusIs = false}
	return statusIs;
	}
Book.prototype.CheckOut = function(book){
		console.log("Checking out "+book.title)
		statusIs=false
		return statusIs;
	}
Book.prototype.CheckIn = function(book){
		console.log("Checking in "+book.title)
		statusIs=True
		return statusIs;
	}
class Library{
	constructor(){
		this.catalog = [];
	};
};
	
var book1 = new Book("Code Complete", "Steve McConnell", "checked in");
var book2 = new Book("The Art of Unit Testing", "Roy Osherove", "checked in");
var book3 = new Book("Domain Driven Design", "Eric Evans", "checked in");
var library = new Library
Library.prototype.addBook = function(book){
		this.catalog.push(book);
	};
Library.prototype.simulate = function(catalog){		
		for (i=0; i<this.catalog.length; i++){
			while(i < 30){
				book.isCheckedOut();
				if(statusIs=true){
					book.CheckOut();
					}
				if(statusIs=false){
					book.CheckIn();
					}
					return i++;
				}
			}
	}
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);	
library.simulate()
