export interface Ticket {
  service: { id: number };
  issuedAt: Date;
}

async function getServices() {
  const response = await fetch('/services');
  const services = await response.json();
  if (response.ok) return services;
  else throw response.statusText;
}

async function postTicket(ticket: Ticket) {
  let response = await fetch('/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticket),
  });
  if (response.ok) {
    return await response.json();
  }
}

const API = { getServices, postTicket };

export default API;
