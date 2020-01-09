import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {useRouteMatch} from 'react-router'
import './App.css';
import FileManagerComponent from "./component/file-manager-component/file-manager.component";
import ChildFileManagerComponent from "./component/child-file-manager.component/child-file-manager.component";

function App() {
    const {path} = useRouteMatch()
  return (
    <div className="App">
        <Switch>
            <Route path = '/:name' component={ChildFileManagerComponent}/>
            <Route exact path = "/" component = {FileManagerComponent}/>
        </Switch>

    </div>
  );
}

export default App;
