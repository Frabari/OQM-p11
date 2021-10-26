import { AppBar, Box, Typography, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#FF8205' }}>
        <div style={{ padding: 20 }}>
          <Typography color="white" style={{ fontSize: 30, float: 'left' }}>
            P11
          </Typography>
          {/*<Link color="inherit" href="/"> P11 </Link>*/}
          <Link color="#FFFFFF" href="/login">
            <AccountCircleIcon
              style={{ float: 'right', marginTop: 5, fontSize: 35 }}
            />
          </Link>
        </div>
      </AppBar>
    </Box>
  );
}
