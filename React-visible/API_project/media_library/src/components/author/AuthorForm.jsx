import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    authorSingleInputChange,
} from '../../actions/authorActions';
import BookForm from '../book/BookForm';

const AuthorForm = () => {
    const dispatch = useDispatch();
    const { author, shopOptions } = useSelector((state) => state.authorReducer);

    return (
        <Fragment>
            <div className="form-group">
                <label htmlFor="name" className="mr-sm-3">
                    Name
                </label>
                <input
                    required
                    className="form-control"
                    id="name"
                    type="text"
                    value={author.name}
                    placeholder="Name"
                    onChange={event => dispatch(authorSingleInputChange(event.target.id, event.target.value))}>
                </input>
            </div>

            <div className="form-group">
                <label htmlFor="bio" className="mr-sm-3">
                    Bio
                </label>
                <input
                    required
                    className="form-control"
                    id="bio"
                    type="text"
                    value={author.bio}
                    placeholder="Bio"
                    onChange={event => dispatch(authorSingleInputChange(event.target.id, event.target.value))}>
                </input>
            </div>

            <div className="form-group">
                <label htmlFor="shop_name" className="mr-sm-3">
                    Shop Name
                </label>
                <select
                    id="shop_name"
                    className="custom-select"
                    defaultValue={author.shop_name}
                    onChange={(event) => dispatch(authorSingleInputChange(event.target.id, event.target.value))}>
                        {[...shopOptions.entries()].map((entry, index) => {
                            const [value, name] = entry;
                            return (
                                <option key={index} value={value}>{name}</option>
                            );
                        })}
                </select>
            </div>

            <BookForm />
        </Fragment>
    )
}

export default AuthorForm;