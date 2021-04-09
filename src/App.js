import React from 'react';

// import { Counter } from './features/counter/Counter';
import HomeScreen from './HomeScreen';
import './App.css';
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
<Route>
<HomeScreen />
</Route>
        </Switch>
   

      </Router>
    
    </div>
  );
}

export default App;
