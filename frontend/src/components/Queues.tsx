import React, { useEffect, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import SocketIo from 'socket.io-client';
import Client from './Client';

const fake_ticket = [
  { number: 1, service: 'A', desk: 2 },
  { number: 1, service: 'B', desk: 3 },
  { number: 1, service: 'C', desk: null },
  { number: 2, service: 'A', desk: null },
];

export default function Queues() {
  const [tickets] = useState(fake_ticket);
  const [calledTicket, setCalledTicket] = useState(null);

  useEffect(() => {
    const socket = SocketIo('http://localhost:3001', {
      transports: ['websocket'],
    });
    socket.on('ticket-called', ticket => {
      setCalledTicket(ticket);
    });
  }, []);

  useEffect(() => {
    if (calledTicket) {
      speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          `Ticket ${calledTicket.id}. Please reach desk number ${calledTicket.desk.id}`,
        ),
      );
    }
  }, [calledTicket]);

  return (
    <>
      {tickets.map(t => (
        <Client
          key={t.number + t.service}
          number={t.number}
          service={t.service}
          desk={t.desk}
        />
      ))}
      <Snackbar
        open={calledTicket}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={() => setCalledTicket(null)}
      >
        {calledTicket && (
          <Alert
            id="success-alert"
            icon={false}
            severity="success"
            sx={{ width: '100%' }}
          >
            {calledTicket.id} desk {calledTicket.desk.id}
          </Alert>
        )}
      </Snackbar>
    </>
  );
}
