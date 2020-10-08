import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import Results from './pages/Results'
import './App.css';

function App()
{
    return (
        <Router>
            <div className="App">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/results">
                    <Results />
                </Route>
            </Switch>
            </div>
        </Router>
    );
}

export default App;
