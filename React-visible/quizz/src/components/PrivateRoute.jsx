import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { authenticated } = useSelector((state) => state)

    return (
        <Route { ...rest } render={(props) => (
            authenticated === true
            ? <Component { ...props } />
            : <Redirect to='/sign-in' />
        )} />
    )
}