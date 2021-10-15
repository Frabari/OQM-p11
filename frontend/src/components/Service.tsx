import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
  Button,
} from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function Service(props: any) {
  return (
    <Container style={{ marginTop: 20 }}>
      <Button>
        <Card style={{ marginBlock: 1 }}>
          <CardContent>
            <CardActions disableSpacing>
              <RadioButtonCheckedIcon style={{ marginRight: 5 }} />
              <Typography variant="h5" component="div">
                {props.name}
              </Typography>
            </CardActions>
          </CardContent>
        </Card>
      </Button>
    </Container>
  );
}
