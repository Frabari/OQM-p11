import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import React, { useState } from 'react';

export default function Service(props: any) {
  const [open, setOpen] = useState(false);
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setOpen(true);
    setNum((old) => old + 1);
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
        {/*<Card style={{ marginBlock: 1 }}>*/}
        {/*  <CardContent>*/}
        {/*    <CardActions disableSpacing>*/}
        <Typography variant="h5">
          <RadioButtonCheckedIcon
            style={{ position: 'relative', top: 4, marginRight: 8 }}
          />
          {props.name}
        </Typography>
        {/*    </CardActions>*/}
        {/*  </CardContent>*/}
        {/*</Card>*/}
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
          {props.name + ' ' + num}
        </Alert>
      </Snackbar>
    </Container>
  );
}

function ShowTicket() {
  return;
}
