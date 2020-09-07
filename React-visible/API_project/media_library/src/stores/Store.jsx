import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import globalReducer from '../reducers/globalReducer';
import appMiddleware from '../middlewares/appMiddleware';
import { getAllAuthors } from '../actions/authorActions';

const hydrateState = {
    authorReducer: {
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
        saved: '',
        shopOptions: new Map([['fnac', 'Fnac' ], ['librairie', 'Librairie'], ['librairie grande rue', 'Librairie Grande Rue']])
    }
}

const Store = ( preloadedState = { ...hydrateState } ) => {

    const store = createStore(globalReducer, preloadedState, applyMiddleware(appMiddleware, thunk));

    store.dispatch(getAllAuthors());

    return store;
}

export default Store;