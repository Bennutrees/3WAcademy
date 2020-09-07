import {
    BOOK_CHANGE,
    ADD_BOOK,
    DELETE_BOOK,
    DELETE_ALL_BOOKS,
    GET_ALL_BOOKS,
} from '../constants/bookConstants';

const initialState = {
    books: [],
    book: ''
}

const bookReducer = (state = initialState, action) => {
    let newBookCollection = [ ...state.books ];
    switch (action.type) {
        case BOOK_CHANGE:
            return { ...state, book: action.value }
        case ADD_BOOK: 
            newBookCollection = newBookCollection.concat(action.book);
            return { ...state, books: newBookCollection, book: '' }
        case GET_ALL_BOOKS:
            return { ...state, books: action.books }
        case DELETE_BOOK:
            newBookCollection = newBookCollection.filter(book => book !== action.book);
            return { ...state, books: newBookCollection }
        case DELETE_ALL_BOOKS:
            return { ...initialState }
        default:
            return state;
    }
}

export default bookReducer;