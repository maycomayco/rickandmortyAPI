import { Grid, Typography, Card, CardMedia, Box } from "@mui/material";

const Character = ({ character }) => {
  const { name, image, status, species } = character;

  return (
    <Card variant="outlined" className="selected">
      <Grid container>
        <Grid item lg={3}>
          <CardMedia component="img" height="100%" image={image} alt={name} />
        </Grid>
        <Grid item lg={9}>
          <Box m={1}>
            <Typography variant="h6" noWrap>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {status}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {species}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Character;
