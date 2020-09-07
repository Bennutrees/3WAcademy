import {
    ADD_BOOK,
    DELETE_BOOK
} from "../constants/bookConstants";
import {
    GET_AUTHOR,
    SELECT_AUTHOR,
    CLEAR_AUTHOR_INPUTS
} from "../constants/authorConstants";
import {
    authorMultipleInputChange
} from "../actions/authorActions";
import {
    getAllBooks,
    deleteAllBooks
} from "../actions/bookActions";

const appMiddleware = store => next => action => {

    const returnAction = next(action);

    if (action.type === ADD_BOOK || action.type === DELETE_BOOK) {
        store.dispatch(authorMultipleInputChange(action.type, 'books', action.book));
    }
    if (action.type === GET_AUTHOR || action.type === SELECT_AUTHOR) {
        store.dispatch(getAllBooks(action.author['books']));
    }
    if (action.type === CLEAR_AUTHOR_INPUTS) {
        store.dispatch(deleteAllBooks());
    }

    return returnAction;
}

export default appMiddleware;