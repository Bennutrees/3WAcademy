import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container text-center mt-5">
            <p>Voir la liste des <Link to='/authors'>auteurs</Link>.</p>
        </div>
    )
}

export default Home;