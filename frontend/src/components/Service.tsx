import { Typography, Container, Button, Alert, Snackbar } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import React, { useState } from 'react';
import API, { Ticket } from '../api/API';

export default function Service(props: any) {
  const [open, setOpen] = useState(false);
  const [num, setNum] = useState(0);
  const [lastIssuedTicket, setLastIssuedTicket] = useState(null);

  const handleClick = () => {
    setNum(old => old + 1);
    let ticket: Ticket = {
      service: { id: props.service.id },
      issuedAt: new Date(),
    };

    API.postTicket(ticket)
      .then(ticket => {
        setOpen(true);
        setLastIssuedTicket(ticket);
      })
      .catch(err => console.log(err));
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Button id="service-button" variant="outlined" onClick={handleClick}>
        <Typography variant="h5">
          <RadioButtonCheckedIcon
            style={{ position: 'relative', top: 4, marginRight: 8 }}
          />
          {props.service.name}
        </Typography>
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          id="success-alert"
          icon={false}
          severity="success"
          sx={{ width: '100%' }}
        >
          {lastIssuedTicket?.id}
        </Alert>
      </Snackbar>
    </Container>
  );
}
