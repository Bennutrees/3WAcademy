import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Card, Form } from 'react-bootstrap';
import {
    addAuthor, clearAuthorInputs,
} from '../../actions/authorActions';
import AuthorForm from './AuthorForm';
import { Redirect } from 'react-router-dom';

const AddAuthor = () => {
    const dispatch = useDispatch();
    const { author, saved } = useSelector((state) => state.authorReducer);

    useEffect(() => {
        dispatch(clearAuthorInputs())
    }, []);

    return (
        <Fragment>
            {saved
                ? <Redirect to="/authors" />
                : <Row className="justify-content-center">
                    <Card className="container login-card col-10 col-sm-8 col-md-7 col-lg-6 col-xl-5 mt-5 mx-5 hv-center">
                        <Form className="my-2 d-flex flex-column"
                            onSubmit={(event) => {
                                event.preventDefault();
                                dispatch(addAuthor(author));
                            }}>
                            
                            <AuthorForm />
        
                            <div className="container d-flex flex-column align-items-center">
                                <button type="submit" className="btn btn-success">Save</button>
                            </div>
                        </Form>
                    </Card>
                </Row>
            }
        </Fragment>
        
    )
}

export default AddAuthor;