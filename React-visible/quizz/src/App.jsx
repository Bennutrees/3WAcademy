import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap/';
import Navigation from './components/Navigation';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { PrivateRoute } from './components/PrivateRoute'
import Qcm from './components/Qcm';
import Scoreboard from './components/Scoreboard';
import { useDispatch } from 'react-redux';
import { handleLogout } from './actions/user-actions-types';

const App = () => {
    const dispatch = useDispatch();

    return (
        <Router>
            <div className="App">
                <Navigation />
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route path="/sign-out" render={ ({location}) => {
                                dispatch(handleLogout());
                                return (
                                    <Redirect to="/" />
                                );
                            }} />
                            <Route path="/sign-in" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                            <PrivateRoute path="/qcm" component={Qcm} />
                            <PrivateRoute path="/scoreboard" component={Scoreboard} />
                        </Switch>
                    </div>
                </div>
                <div className="app-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;