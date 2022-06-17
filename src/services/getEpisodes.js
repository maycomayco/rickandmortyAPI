/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
const API_URL = "https://rickandmortyapi.com/api/episode/";

// limpiamos properties que no necesitamos
const deleteProperties = (item) => {
  delete item.characters;
  delete item.url;
  delete item.created;
};

// Por definicion, si hacemos la query por un ID, obetenemos un obajeto y si hacemos la query por varios ID obtenemos un array
const transformResponse = (result) => {
  if (Array.isArray(result)) {
    const transformedData = result.map((item) => {
      deleteProperties(item);
      return item;
    });
    return transformedData;
  }

  deleteProperties(result);
  // retornamos array
  return [result];
};

// Agregamos params que necesitamos para hacer la query
const prepareUrl = (url, query) => url.concat(query.join());

// obtenemos el episodio o la lista completa de episodios por los cuales hacemos la query
const getEpisodesById = async (query) => {
  let url = API_URL;
  url = prepareUrl(url, query);
  const resp = await fetch(url);
  const data = await resp.json();
  const cleanResults = await transformResponse(data);
  return cleanResults;
};

export default getEpisodesById;
