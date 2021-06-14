import {Principal} from '../src/principal/Principal';
import {Students} from './students/Students';
import {Staff} from './staff/Staff';
import {Buttons} from './components/Buttons';
import {ButtonsFav} from './components/ButtonsFav';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss'

function App() {

  return (
    <>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <ButtonsFav />
            <Buttons />
            <Principal />
          </Route>
          <Route exact path='/students'>
            <ButtonsFav />
            <Buttons />
            <Students />
          </Route>
          <Route exact path='/staff'>
            <ButtonsFav />
            <Buttons />
            <Staff />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
