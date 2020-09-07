import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    bookInputChange,
    bookSubmit,
    deleteBook
} from '../../actions/bookActions';

const BookForm = () => {
    const dispatch = useDispatch();
    const { books, book } = useSelector(state => state.bookReducer)

    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor="book" className="mr-sm-3">
                    Books
                </label>
                {books.length > 0
                    && books.map((book, index) => {
                        return (
                            <div key={index} className="row my-2 d-flex justify-content-center align-items-baseline">
                                <div className="col-5 col-sm-7">
                                    <p>{book}</p>
                                </div>

                                <div className="col-7 col-sm-5">
                                    <div className="container">
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => dispatch(deleteBook(book))}>
                                                Delete Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

                <div className="row my-2 d-flex justify-content-center align-items-center">
                    <div className="col-5 col-sm-7">
                        <input
                            className="form-control"
                            id="book"
                            type="text"
                            placeholder="Book"
                            value={book}
                            onChange={event => dispatch(bookInputChange(event.target.value))}
                        >
                        </input>
                    </div>

                    <div className="col-7 col-sm-5">
                        <div className="container">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => dispatch(bookSubmit(book, books))}>
                                    Add Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default BookForm;