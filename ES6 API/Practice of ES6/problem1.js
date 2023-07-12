const bookList = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },

    {
        title: 'Harry Potter and the Philosopher Stone',
        author: 'J.K. Rowling',
        year: 1997
    },

    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        year: 2008
    }
]


const findBooks = (arrOfBooks) => {
    const books = arrOfBooks.filter(n => n.year > 2000)
    return books;
}

console.log(findBooks(bookList));