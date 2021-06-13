import {Principal} from '../src/principal/Principal';
import {Students} from './students/Students';
import {Staff} from './staff/Staff';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Principal />
          </Route>
          <Route exact path='/students'>
            <Students />
          </Route>
          <Route exact path='/staff'>
            <Staff />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
