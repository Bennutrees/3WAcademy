import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AuthorIndex from './components/author/AuthorIndex';
import AddAuthor from './components/author/AddAuthor';
import EditAuthor from './components/author/EditAuthor';

function App() {

    return (
        <Router>
            <div className="App">
                <Navigation />
                <div className="app-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/authors" component={AuthorIndex}/>
                        <Route path="/author" component={AddAuthor}/>
                        <Route path="/author-edit" component={EditAuthor}/>
                    </Switch>
                </div>  
            </div>
        </Router>
    );
}

export default App;
