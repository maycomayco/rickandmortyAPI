import { Grid, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Episodes from "../../components/Episodes";
import Header from "../../components/Header";
import ListOfCharacters from "../../components/ListOfCharacters";
import useCharacters from "../../hooks/useCharacters";

const CHARACTER_TYPE = { id: "", name: "Jhon Doe" };
const INITIAL_PAGE = 1;

const Home = () => {
  const [characterOne, setCharacterOne] = useState(CHARACTER_TYPE);
  const [characterTwo, setCharacterTwo] = useState(CHARACTER_TYPE);
  const [characterOneEpisodes, setCharacterOneEpisodes] = useState([]);
  const [characterTwoEpisodes, setCharacterTwoEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [charactersIntersectionEpisodes, setCharacterIntersectionEpisodes] =
    useState([]);

  const {
    loading,
    characters,
    setCurrentPageUrl,
    nextPageUrl,
    prevPageUrl,
    totalPages,
  } = useCharacters();

  useEffect(() => {
    if (characterOne.id) {
      const character = characters.find((c) => c.id === characterOne.id);
      setCharacterOneEpisodes(character.episodesId);
    }
  }, [characterOne]);

  useEffect(() => {
    if (characterTwo.id) {
      const character = characters.find((c) => c.id === characterTwo.id);
      setCharacterTwoEpisodes(character.episodesId);
    }
  }, [characterTwo]);

  useEffect(() => {
    if (characterOneEpisodes && characterTwoEpisodes) {
      const episodesIntersection = characterOneEpisodes.filter((elem) =>
        characterTwoEpisodes.includes(elem)
      );
      setCharacterIntersectionEpisodes(episodesIntersection);
    }
  }, [characterOneEpisodes, characterTwoEpisodes]);

  const handleNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
    setCurrentPage((current) => current + 1);
  };
  const handlePrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
    setCurrentPage((current) => current - 1);
  };

  return (
    <>
      <Box mb={2}>
        <Header />
      </Box>
      <Box mb={2}>
        <Grid container spacing={2} maxHeight="55vh" sx={{ overflowX: "auto" }}>
          <Grid item container lg={6} spacing={2}>
            <ListOfCharacters
              loading={loading}
              characters={characters}
              setId={setCharacterOne}
            />
          </Grid>
          <Grid item container lg={6} spacing={2}>
            <ListOfCharacters
              loading={loading}
              characters={characters}
              setId={setCharacterTwo}
            />
          </Grid>
        </Grid>
      </Box>
      <Box mb={2}>
        <Grid container justifyContent="center" spacing={2} alignItems="center">
          <Grid item>
            <Button
              variant="outlined"
              onClick={handlePrevPage}
              disabled={!prevPageUrl}
            >
              Prev Page
            </Button>
          </Grid>
          <Grid item>
            <Typography>
              Page #{currentPage} of {totalPages}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={handleNextPage}
              disabled={!nextPageUrl}
            >
              Next Page
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <Typography variant="h6">
              {characterOne.name} - Only episodes
            </Typography>
            <Episodes episodes={characterOneEpisodes} />
          </Grid>
          <Grid item lg={4} spacing={2}>
            <Typography variant="h6">
              Character #1 & #2 - Shared episodes
            </Typography>
            <Episodes episodes={charactersIntersectionEpisodes} />
          </Grid>
          <Grid item lg={4} spacing={2}>
            <Typography variant="h6">
              {characterTwo.name} - Only episodes
            </Typography>
            <Episodes episodes={characterTwoEpisodes} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Home;
