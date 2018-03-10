import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import News from './components/News';

main();

function main() {
    var app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);

    // ReactDOM.render(<App />, document.getElementById('app'));

    ReactDOM.render((
        <Router>
            <Route  component={App}>
                <Route path="/news" component={News}>
                </Route>
            </Route>
        </Router>
    ), document.getElementById('app'));
}