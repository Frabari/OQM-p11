import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import API from './api/API';

import Navigation from './components/Navigation';
import Service from './components/Service';
import Queues from './components/Queues';
import Desk from './components/Desk';

const fake_serv = [
  { name: 'servizio1', prefix: 'A', avgWaitingTime: 10 },
  { name: 'servizio2', prefix: 'B', avgWaitingTime: 10 },
  { name: 'servizio3', prefix: 'C', avgWaitingTime: 10 },
];

export default function App() {
  const [services, setServices] = useState(fake_serv);

  useEffect(() => {
    API.getServices()
      .then(services => setServices(services))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />

        <Route exact path="/">
          <Redirect to="/totem" />
        </Route>

        <Route exact path="/totem">
          {services.map(s => (
            <Service key={s.prefix} service={s} />
          ))}
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
