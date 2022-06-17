/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
const API_URL = "https://rickandmortyapi.com/api/character";

const transformResponse = (results) => {
  if (Array.isArray(results)) {
    const transformedData = results.map((item) => {
      // transformamos  la lista de URL de episodios a un lista de solo IDs de episodios
      const episodesId = item.episode.map((e) => e.split("/").at("-1"));
      item.episodesId = episodesId;

      // removemos properties innecesarias
      delete item.type;
      delete item.gender;
      delete item.origin;
      delete item.location;
      delete item.url;
      delete item.created;
      delete item.episode;

      return item;
    });
    return transformedData;
  }
  return [];
};

// obtenemos todos los characters
const getCharacters = async (url = API_URL) => {
  const resp = await fetch(url);
  const data = await resp.json();
  const {
    info: { next, prev, pages },
    results,
  } = data;
  const cleanResults = await transformResponse(results);
  return { next, prev, pages, cleanResults };
};

export default getCharacters;
