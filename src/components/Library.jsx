import React, { useState } from "react";

const Library = () => {
	const [books, setBooks] = useState([
		{title: "Harry Potter",author: "J.K. Rowling",summary:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling.",},
		{title: "The Lord of the Rings",author: "J.R.R. Tolkien",summary:"The Lord of the Rings is an epic high-fantasy novel written by J. R. R. Tolkien.",},
		{title: "The Hobbit",author: "J.R.R. Tolkien",summary:"The Hobbit, or There and Back Again, is a children's fantasy novel by English author J. R. R. Tolkien.",},
		{title: "Hatter",author: "J.K. Rowling",summary:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling.",},
		{title: "Th of the Rings",author: "J.R.R. Tolkien",summary:"The Lord of the Rings is an epic high-fantasy novel written by J. R. R. Tolkien.",},
		{title: "Thit",author: "J.R.R. Tolkien",summary:"The Hobbit, or There and Back Again, is a children's fantasy novel by English author J. R. R. Tolkien.",},
		{title: "Hatter",author: "J.K. Rowling",summary:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling.",},
		{title: "Th of the Rings",author: "J.R.R. Tolkien",summary:"The Lord of the Rings is an epic high-fantasy novel written by J. R. R. Tolkien.",},
		{title: "Thit",author: "J.R.R. Tolkien",summary:"The Hobbit, or There and Back Again, is a children's fantasy novel by English author J. R. R. Tolkien.",},
		{title: "Hamotter",author: "J.K. Rowling",summary:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling.",},
		{title: "Thmi of the Rings",author: "J.R.R. Tolkien",summary:"The Lord of the Rings is an epic high-fantasy novel written by J. R. R. Tolkien.",},
		{title: "Tomouomhit",author: "J.R.R. Tolkien",summary:"The Hobbit, or There and Back Again, is a children's fantasy novel by English author J. R. R. Tolkien.",},
		{title: "Humatter",author: "J.K. Rowling",summary:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling.",},
		{title: "Tumhit",author: "J.R.R. Tolkien",summary:"The Hobbit, or There and Back Again, is a children's fantasy novel by English author J. R. R. Tolkien.",},
		{title: "Hiuiuuuilh of the Rings",author: "J.R.R. Tolkien",summary:"The Lord of the Rings is an epic high-fantasy novel written by J. R. R. Tolkien.",},
		{title: "Tylylhit",author: "J.R.R. Tolkien",summary:"The Hobbit, or There and Back Again, is a children's fantasy novel by English author J. R. R. Tolkien.",},
		{title: "Haultter",author: "J.K. Rowling",summary:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling.",},
		{title: "Thtjtykyuy of the Rings",author: "J.R.R. Tolkien",summary:"The Lord of the Rings is an epic high-fantasy novel written by J. R. R. Tolkien.",},
		{title: "zeg",author: "J.R.R. Tolkien",summary:"The Hobbit, or There and Back Again, is a children's fantasy novel by English author J. R. R. Tolkien.",},
		{title: "Hazgztter",author: "J.K. Rowling",summary:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling.",},
		{title: "Thzegzgezeg of the Rings",author: "J.R.R. Tolkien",summary:"The Lord of the Rings is an epic high-fantasy novel written by J. R. R. Tolkien.",},
		{title: "Thzgezegit",author: "J.R.R. Tolkien",summary:"The Hobbit, or There and Back Again, is a children's fantasy novel by English author J. R. R. Tolkien.",},
		{title: "Hazegzegtter",author: "J.K. Rowling",summary:"Harry Potter is a series of fantasy novels written by British author J. K. Rowling.",},
		{title: "Thzegzeg of the Rings",author: "J.R.R. Tolkien",summary:"The Lord of the Rings is an epic high-fantasy novel written by J. R. R. Tolkien.",},
		{title: "Thzegzgit",author: "J.R.R. Tolkien",summary:"The Hobbit, or There and Back Again, is a children's fantasy novel by English author J. R. R. Tolkien.",},
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [showDetails, setShowDetails] = useState(
		new Array(books.length).fill(false)
	);
	const [currentPage, setCurrentPage] = useState(1);
	const [booksPerPage] = useState(6);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleToggleDetails = (index) => {
		const newShowDetails = [...showDetails];
		newShowDetails[index] = !newShowDetails[index];
		setShowDetails(newShowDetails);
	};

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	const filteredBooks = books.filter((book) =>
		book.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Get current books
	const indexOfLastBook = currentPage * booksPerPage;
	const indexOfFirstBook = indexOfLastBook - booksPerPage;
	const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

	// Get page numbers
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(filteredBooks.length / booksPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<input type="text" placeholder="Search for a book" onChange={handleSearch}/>
			<ul>
				{currentBooks.map((book, index) => (
					<li key={book.title}>
						{book.title} by {book.author}
						<button onClick={() => handleToggleDetails(index)}>
							Details
						</button>
						{showDetails[index] && <p>{book.summary}</p>}
					</li>
				))}
			</ul>
			<div className="pagination">
				{pageNumbers.map((number) => (
					<button key={number} onClick={() => handlePageChange(number)}>
						{number}
					</button>
				))}
			</div>
		</div>
	);
};

export default Library;
