export const bookInputChange = (value) => {
    return { type: 'BOOK_CHANGE', value: value };
}

export const bookSubmit = (book, books) => {
    let bookAlreadyAdded = false;
    books.forEach( addedBook => {
        if (addedBook === book) bookAlreadyAdded = true;
    });
    if (book !== '' && !bookAlreadyAdded) {
        return addBook(book);
    }
    return { type: '' };
}

export const getAllBooks = (books) => {
    return { type: 'GET_ALL_BOOKS', books: books };
}

export const addBook = (book) => {
    return { type: 'ADD_BOOK', book: book };
}

export const deleteBook = (book) => {
    return { type: 'DELETE_BOOK', book: book };
}

export const deleteAllBooks = () => {
    return { type: 'DELETE_ALL_BOOKS' };
}