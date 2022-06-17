import { Grid, CircularProgress } from "@mui/material";
import Character from "../Character";

const ListOfCharacters = ({ loading, characters, setId }) =>
  loading ? (
    <Grid item>
      <CircularProgress />
    </Grid>
  ) : (
    characters.map((character) => (
      <Grid
        item
        lg={6}
        key={character.id}
        onClick={() =>
          setId((prevState) => ({
            ...prevState,
            id: +character.id,
            name: character.name,
          }))
        }
      >
        <Character character={character} />
      </Grid>
    ))
  );
export default ListOfCharacters;
