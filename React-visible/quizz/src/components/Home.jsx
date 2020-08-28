import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    resetRegistration
} from '../actions/user-actions-types';

const Home = () => {
    const dispatch = useDispatch();
    const { registered, authenticated, user } = useSelector((state) => state);

    if (registered) {
        dispatch(resetRegistration());
    }

    return (
        <div className="container text-center my-5">
            {authenticated
                ? user.qcmCompleted
                    ? <Fragment>
                        <p>Vous n'avez plus de QCM à faire.</p>
                        <p>Voir votre <Link to='/scoreboard'>score</Link>.</p>
                    </Fragment>
                    : <Fragment>
                        <p>Bienvenue {user.username} !</p>
                        <p>Vous avez un QCM à faire.</p>
                        <p>Cliquez <Link to="/qcm">ici</Link> ou dans le menu <em>QCM</em> pour commencer.</p>
                    </Fragment>
                : <Fragment>
                <p>Bienvenue sur l'Application Quizz !</p>
                <p>Pour jouer, vous devez d'abord vous <Link to="sign-in">connecter</Link> ou vous <Link to="/sign-up">inscrire</Link>.</p>
                </Fragment>
            }
        </div>
    )
}

export default Home;