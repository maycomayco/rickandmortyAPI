import { Grid, Typography } from "@mui/material";

const Header = () => (
  <Grid container spacing={2}>
    <Grid item lg={6}>
      <Typography variant="h4" align="left">
        Select player #1
      </Typography>
    </Grid>
    <Grid item lg={6}>
      <Typography variant="h4" align="right">
        Select player #2
      </Typography>
    </Grid>
  </Grid>
);

export default Header;
