import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Card, Form } from 'react-bootstrap';
import {
    editAuthor,
} from '../../actions/authorActions';
import AuthorForm from './AuthorForm';

const EditAuthor = () => {
    const dispatch = useDispatch();
    const { author, saved } = useSelector((state) => state.authorReducer);

    return (
        <Fragment>
            {saved || author === undefined || author.id === ''
                ? <Redirect to="/authors" />
                : <Row className="justify-content-center">
                    <Card className="container login-card col-10 col-sm-8 col-md-7 col-lg-6 col-xl-5 mt-5 mx-5 hv-center">
                        <Form className="my-2 d-flex flex-column"
                            onSubmit={(event) => {
                                event.preventDefault();
                                dispatch(editAuthor(author.id, author));
                            }}>
                            
                            <AuthorForm />

                            <div className="container d-flex flex-column align-items-center">
                                <button type="submit" className="btn btn-success">Edit</button>
                            </div>
                        </Form>
                    </Card>
                </Row>
            }
        </Fragment>
    )
}

export default EditAuthor;