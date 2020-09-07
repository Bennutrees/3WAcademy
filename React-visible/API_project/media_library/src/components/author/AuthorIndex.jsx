import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {
    getAllAuthors,
    selectAuthor,
    getAuthorDetails,
    deleteAuthor,
    clearAuthorInputs,
    reinitializeSavedState
} from '../../actions/authorActions'
import AuthorDetails from './AuthorDetails';

const CRUDButton = styled.button({
    margin: "0.5rem !important"
})

const AuthorIndex = () => {
    const dispatch = useDispatch();
    const { authors, currentAuthorId, shopOptions } = useSelector((state) => state.authorReducer);

    useEffect(() => {
        dispatch(getAllAuthors());
        dispatch(clearAuthorInputs());
        dispatch(reinitializeSavedState());
    }, []);

    return (
        <div className="container mt-5">
            <Row>
                <Col sm={4}>
                    <div className="list-group">
                        {authors.map((author, index) => {
                            return (
                                <div
                                    key={index}
                                    className="list-group-item">
                                        <p>
                                            {author.name}
                                        </p>
                                        <div className="action d-inline-flex flex-wrap">
                                            <CRUDButton
                                                type="button"
                                                className="btn btn-info"
                                                onClick={() => dispatch(getAuthorDetails(author.id))}>
                                                    Watch
                                            </CRUDButton>
                                            <Link to={{
                                                    pathname:"author-edit",
                                                }}>
                                                <CRUDButton
                                                    type="button"
                                                    className="btn btn-success"
                                                    onClick={() => dispatch(selectAuthor(author))}>
                                                        Edit
                                                </CRUDButton>
                                            </Link>
                                            <CRUDButton
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => dispatch(deleteAuthor(author.id))}>
                                                    Delete
                                            </CRUDButton>
                                        </div>
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col sm={8}>
                    <div className="tab-content">
                        {authors.map((author, index) => {
                            const visibility = currentAuthorId === author.id ? 'show active' : 'd-none';
                            return (
                                <div
                                    key={index}
                                    className={`tab-pane fade ${visibility}`}>
                                        <AuthorDetails author={author}/>
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AuthorIndex;