import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Queues from './components/Queues';
import Desk from './components/Desk';
import Services from './components/Services';

export default function App() {
  return (
    <Router>
      <div className="App">
        {/*<Navigation />*/}

        <Route exact path="/">
          <Redirect to="/totem" />
        </Route>

        <Route exact path="/totem">
          <Services />
        </Route>

        <Route path="/queues">
          <Queues />
        </Route>

        <Route path="/desks/:id">
          <Desk />
        </Route>
      </div>
    </Router>
  );
}
