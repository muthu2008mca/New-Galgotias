const getBookTitles = books => books.map(book => book.title);

const books = [
    { title: "python", author: "Aswin" },
    { title: "java", author: "Muthu" },
    { title: "c++", author: "Ganesh" }
  ];

  
  const bookTitles = getBookTitles(books);
  console.log(bookTitles); // Output: ["Book 1", "Book 2", "Book 3"]
  