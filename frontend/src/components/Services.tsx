import { useEffect, useState } from 'react';
import Service from './Service';
import API from '../api/API';

export default function () {
  const [services, setServices] = useState([]);

  useEffect(() => {
    API.getServices().then(services => {
      setServices(services);
    });
  }, []);

  return (
    <>
      <h1>Select a service</h1>
      {services.map(s => (
        <Service key={s.id} service={s} />
      ))}
    </>
  );
}
