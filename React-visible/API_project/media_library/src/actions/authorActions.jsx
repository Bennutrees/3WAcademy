import { AUTHOR_API_URL } from '../constants/authorConstants';

export const getAuthorDetails = (id) => {
    return { type: 'GET_AUTHOR_DETAILS', authorId: id };
}

export const selectAuthor = (author) => {
    return { type: 'SELECT_AUTHOR', author: author };
}

export const authorSingleInputChange = (key, value) => {
    return { type: 'AUTHOR_SINGLE_INPUT_CHANGE', key: key, value: value };
}

export const authorMultipleInputChange = (action, key, value) => {
    const subtype = action.includes('ADD') ? 'ADD' : 'DELETE';
    return { type: 'AUTHOR_MULTIPLE_INPUT_CHANGE', subtype: subtype, key: key, value: value };
}

export const submitAuthor = () => {
    return { type: 'SUBMIT_AUTHOR' };
}

export const clearAuthorInputs = () => {
    const initialAuthor = {
        id: '',
        name: '',
        bio: '',
        shop_name: '',
        books: []
    }
    return { type: 'CLEAR_AUTHOR_INPUTS', author: initialAuthor };
}

export const reinitializeSavedState = () => {
    return { type: 'REINITIALIZE_SAVED_STATE' };
}

// CRUD ACTIONS

export const getAuthor = (id) => {
    return dispatch => {
        (async () => {
            const options = {
                method: 'GET',
                headers: { "Content-Type": "application/json" }
            }   
            const getResponse = await fetch(AUTHOR_API_URL + `/author/${id}`, options);
            const data = await getResponse.json();
            dispatch({ type: 'GET_AUTHOR', author: JSON.parse(data.author) });
        })();
    }
}

export const getAllAuthors = () => {
    return dispatch => {
        (async () => {
            const options = {
                method: 'GET',
                headers: { "Content-Type": "application/json" }
            }
            const response = await fetch(AUTHOR_API_URL + `/authors`, options);
            const data = await response.json();
            dispatch({ type: 'GET_ALL_AUTHORS', authors: data.authors });
        })();
    }
}

export const addAuthor = (author) => {
    return dispatch => {
        (async () => {
            const options = {
                method: 'POST',
                body: JSON.stringify(author),
                headers: { "Content-Type": "application/json" }
            }
            const addResponse = await fetch(AUTHOR_API_URL + `/add`, options);
            dispatch(submitAuthor())
            dispatch(clearAuthorInputs());
            dispatch(getAllAuthors());
        })();
    }
}

export const editAuthor = (id, author) => {
    return dispatch => {
        (async () => {
            const options = {
                method: 'PUT',
                body: JSON.stringify(author),
                headers: { "Content-Type": "application/json" }
            }    
            const editResponse = await fetch(AUTHOR_API_URL + `/author/${id}`, options);
            dispatch(submitAuthor())
            dispatch(clearAuthorInputs());
            dispatch(getAllAuthors());
        })();
    }
}

export const deleteAuthor = (id) => {
    return dispatch => {
        (async () => {
            const options = {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            }    
            const deleteResponse = await fetch(AUTHOR_API_URL + `/author/${id}`, options);
            dispatch(getAllAuthors());
        })();
    }
}