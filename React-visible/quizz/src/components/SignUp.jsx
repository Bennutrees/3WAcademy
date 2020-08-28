import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSignUpSubmit,
    handleClear
} from '../actions/user-actions-types';

const SignUp = () => {
    const dispatch = useDispatch();
    const { users, user, usernameTaken, emailTaken, passwordsMatch, registered } = useSelector((state) => state);

    useEffect(() => {
        dispatch(handleClear());
    }, [])

    if (registered) {
        return (
            <Redirect to={'/'} />
        )
    }

    return (
        <div className="row justify-content-center">
            <div className="container card login-card col-10 col-sm-8 col-md-7 col-lg-6 col-xl-5 mt-5 mx-5 hv-center">
                <form className="my-2 d-flex flex-column"
                    onSubmit={(event) => {
                        event.preventDefault();
                        return dispatch(handleSignUpSubmit(usernameTaken, emailTaken, passwordsMatch, user));
                    }
                }>
                    <div className="form-group">
                        <label htmlFor="username" className="mr-sm-3">
                            Nom d'Utilisateur
                        </label>
                        <input
                            required
                            className="form-control"
                            id="username"
                            type="text"
                            value={user.username}
                            placeholder="Pseudo"
                            onChange={event => dispatch(handleUsernameChange(event.target.id, event.target.value, users))}>
                        </input>
                        {!usernameTaken && user.username !== ''
                            && <small style={{color: 'green'}}>Disponible !</small>}
                        {usernameTaken && user.username !== ''
                            && <small style={{color: 'red'}}>Indisponible !</small>}
                        {user.username === '' && usernameTaken
                            && <small style={{color: 'red'}}>Non Valide !</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="mr-sm-3">
                            Email
                        </label>
                        <input
                            required
                            className="form-control"
                            id="email"
                            type="email"
                            value={user.email}
                            placeholder="Email"
                            onChange={event => dispatch(handleEmailChange(event.target.id, event.target.value, users))}>
                        </input>
                        {!emailTaken && user.email !== ''
                            && <small style={{color: 'green'}}>Disponible !</small>}
                        {emailTaken && user.email !== ''
                            && <small style={{color: 'red'}}>Indisponible !</small>}
                        {user.email === '' && emailTaken
                            && <small style={{color: 'red'}}>Non Valide !</small>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="mr-sm-3">
                            Mot de Passe
                        </label>
                        <input
                            required
                            className="form-control"
                            id="password" type="password"
                            value={user.password}
                            placeholder="Mot de Passe"
                            onChange={event => dispatch(handlePasswordChange(event.target.id, event.target.value))}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="mr-sm-3">
                            Confirmation Mot de Passe
                        </label>
                        <input
                            required
                            className="form-control"
                            id="confirmPassword"
                            type="password"
                            value={user.confirmPassword} 
                            placeholder="Confirmer Mot de Passe"
                            onChange={event => dispatch(handlePasswordChange(event.target.id, event.target.value))}>
                        </input>
                        {user.password !== '' && user.confirmPassword !== '' && passwordsMatch
                            && <small style={{color: 'green'}}>Les mots de passe correspondent !</small>}
                        {user.confirmPassword !== '' && !passwordsMatch
                            && <small style={{color: 'red'}}>Les mots de passe ne correspondent pas !</small>}
                    </div>

                    <div className="container d-flex flex-column align-items-center">
                        <button type="submit" className="btn btn-primary">Inscription</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;