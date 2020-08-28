import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    handleLoginChange,
    handleLoginSubmit,
    handleClear
} from '../actions/user-actions-types';


const Login = () => {
    const dispatch = useDispatch();
    const { user, users, invalidSubmit, authenticated } = useSelector((state) => state);

    useEffect(() => {
        dispatch(handleClear());
    }, [])

    if (authenticated) {
        return (
            <Redirect to={"/"} />
        )
    }

    return (
        <div className="row justify-content-center">
            <div className="container card login-card col-10 col-sm-8 col-md-7 col-lg-6 col-xl-5 mt-5 mx-5 hv-center">
                <form className="my-2 d-flex flex-column"
                    onSubmit={(event) => {
                        event.preventDefault();
                        return dispatch(handleLoginSubmit(user, users));
                    }
                }>
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
                            onChange={event => dispatch(handleLoginChange(event.target.id, event.target.value))}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="mr-sm-3">
                            Mot de Passe
                        </label>
                        <input
                            required
                            className="form-control"
                            id="password"
                            type="password"
                            value={user.password}
                            placeholder="Mot de Passe"
                            onChange={event => dispatch(handleLoginChange(event.target.id, event.target.value))}>
                        </input>
                    </div>

                    <div className="container d-flex flex-column align-items-center">
                        <button type="submit" className="btn btn-primary">Connexion</button>
                        <small className="mt-2">Pas encore de compte ? <Link to='/sign-up'>Inscris-toi !</Link></small>
                        {invalidSubmit && <small className="mt-2" style={{color: 'red'}}>Email ou mot de passe erroné</small>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;