import {
    GET_AUTHOR,
    GET_ALL_AUTHORS,
    GET_AUTHOR_DETAILS,
    SELECT_AUTHOR,
    AUTHOR_SINGLE_INPUT_CHANGE,
    AUTHOR_MULTIPLE_INPUT_CHANGE,
    ADD,
    DELETE,
    SUBMIT_AUTHOR,
    CLEAR_AUTHOR_INPUTS,
    REINITIALIZE_SAVED_STATE
} from '../constants/authorConstants';

const initialState = {
    authors: [],
    author: {
        id: '',
        name: '',
        bio: '',
        shop_name: '',
        books: []
    },
    book: '',
    currentAuthorId: '',
    saved: false,
    shopOptions: new Map()
}

const authorReducer = (state = initialState, action) => {
    let newAuthor = { ...state.author }
    switch (action.type) {
        case GET_AUTHOR: case SELECT_AUTHOR:
            return { ...state, author: action.author }
        case GET_ALL_AUTHORS:
            return { ...state, authors: action.authors }
        case GET_AUTHOR_DETAILS:
            return { ...state, currentAuthorId: action.authorId }
        case AUTHOR_SINGLE_INPUT_CHANGE: {
            const { key, value } = action;
            newAuthor[key] = value;
            return { ...state, author: newAuthor }
        }
        case AUTHOR_MULTIPLE_INPUT_CHANGE: {
            const { key, value } = action;
            switch  (action.subtype) {
                case ADD:
                    newAuthor[key] = newAuthor[key].concat(value);
                    return { ...state, author: newAuthor }
                case DELETE:
                    newAuthor[key] = newAuthor[key].filter(element => element !== value);
                    return { ...state, author: newAuthor }
                default:
                    return state;
            }
        }
        case SUBMIT_AUTHOR:
            return { ...state, saved: true }
        case CLEAR_AUTHOR_INPUTS:
            return { ...state, author: action.author }
        case REINITIALIZE_SAVED_STATE:
            return { ...state, saved: false }
        default:
            return state;
    }
}

export default authorReducer;