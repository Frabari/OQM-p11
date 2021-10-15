import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation';
import Service from './components/Service';
import Client from './components/Client';

const fake_serv = [
  { name: 'servizio1', prefix: 'A', avgWaitingTime: 10 },
  { name: 'servizio2', prefix: 'B', avgWaitingTime: 10 },
  { name: 'servizio3', prefix: 'C', avgWaitingTime: 10 },
];

const fake_ticket = [
  { number: 1, service: 'A', desk: 2 },
  { number: 1, service: 'B', desk: 3 },
  { number: 1, service: 'C', desk: null },
  { number: 2, service: 'A', desk: null },
];

export default function App() {
  const [services, setServices] = useState(fake_serv);
  const [tickets, setTickets] = useState(fake_ticket);

  return (
    <Router>
      <div className="App">
        <Navigation />

        <Route exact path="/">
          <Redirect to="/totem" />
        </Route>

        <Route exact path="/totem">
          {services.map((s) => (
            <Service key={s.prefix} name={s.name} />
          ))}
        </Route>

        <Route path="/desk">
          {tickets.map((t) => (
            <Client
              key={t.number}
              number={t.number}
              service={t.service}
              desk={t.desk}
            />
          ))}
        </Route>
      </div>
    </Router>
  );
}
