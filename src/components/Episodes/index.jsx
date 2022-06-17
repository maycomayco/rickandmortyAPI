import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useEffect } from "react";
import useEpisodes from "../../hooks/useEpisodes";

const EmptyTable = () => (
  <TableRow key={1} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
    <TableCell>Nothing to show</TableCell>
  </TableRow>
);

const Episodes = ({ episodes } = []) => {
  const { episodes: resultEpisodes, setEpisodesQuery } = useEpisodes();

  useEffect(() => {
    setEpisodesQuery(episodes);
  }, [episodes]);

  /* Implementacion custom de uuid */
  const uuid = () => {
    const date = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);

    return `${date}${random}`;
  };

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="episodes table">
        <TableHead>
          <TableRow>
            <TableCell># Episode</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Air Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Chequeo lista vacia */}
          {!episodes.length ? (
            <EmptyTable />
          ) : (
            resultEpisodes.map((row) => (
              <TableRow
                // Utilice esto para evitar keys repetidas, ya que se pueden repetir episodios
                key={uuid()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.episode}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.air_date}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Episodes;
