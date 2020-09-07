import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const AuthorDetails = (props) => {
    const { author } = props;
    const { shopOptions } = useSelector(state => state.authorReducer);

    return (
        <Card>
            <Card.Header>Details</Card.Header>
            <Card.Body>
                <Card.Text>
                    Name: {author.name}<br/>
                    Bio: {author.bio}<br/>
                    Shop: {shopOptions.get(author.shop_name)}<br/>
                    Books: {author.books.map((book, index) => index + 1 < author.books.length ? book + ', ' : book )}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default AuthorDetails;