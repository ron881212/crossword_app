import React from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";
import RandomPuzzle from './pages/RandomPuzzle'
import CreatePuzzle from './pages/CreatePuzzle'
import SolvePuzzle from './pages/SolvePuzzle'
import HighScore from './pages/HighScore'

function App() {
  return (
    <HashRouter basename='/crossword_app'>
        <Switch>
          <Route exact path="/" component={RandomPuzzle} />
          <Route exact path="/CreatePuzzle" component={CreatePuzzle} />
          <Route exact path="/SolvePuzzle" component={SolvePuzzle} />
          <Route exact path="/HighScore" component={HighScore} />
        </Switch>
    </HashRouter>
  );
}

export default App;
