import { useEffect, useState } from "react";
import getEpisodesById from "../services/getEpisodes";

const useEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [queryEpisodes, setEpisodesQuery] = useState([]);

  useEffect(() => {
    getEpisodesById(queryEpisodes).then((resp) => {
      setEpisodes(resp);
    });
  }, [queryEpisodes]);

  return { episodes, setEpisodesQuery };
};

export default useEpisodes;
