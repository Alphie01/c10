import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './nav';
import Main from './main';

function App() {
  return (
    <div className={"App"}>
      
      <Router>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Nav />
          </Route>
          <Route path="/:topicId">
            <Main />
          </Route>
        </Switch>

    </Router>

    </div>
  )
}

export default App
