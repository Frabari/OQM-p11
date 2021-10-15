import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
} from '@mui/material';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';

export default function Client(props: any) {
  return (
    <Container style={{ marginTop: 20 }}>
      <Card style={{ marginBlock: 1 }}>
        <CardContent>
          <CardActions disableSpacing>
            {props.desk !== null ? (
              <>
                <DesktopMacOutlinedIcon style={{ marginRight: 5 }} />
                <h2 style={{ marginRight: 20 }}>{props.desk}</h2>
              </>
            ) : (
              <HourglassEmptyOutlinedIcon />
            )}

            <Typography variant="h5" component="div" style={{ marginLeft: 5 }}>
              {props.service}
              {props.number}
            </Typography>
          </CardActions>
        </CardContent>
      </Card>
    </Container>
  );
}
