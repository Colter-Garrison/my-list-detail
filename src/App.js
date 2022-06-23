import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InsectsPage from './InsectsPage';
import InsectDetail from './InsectDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <InsectsPage />
          </Route>
          <Route exact path='/insects/:id'>
            <InsectDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}