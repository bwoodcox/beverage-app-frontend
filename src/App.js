import "./App.css";
import { Container, Grid, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h1" component="h2">
            Beverage App
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
