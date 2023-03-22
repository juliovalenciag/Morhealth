export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
  'X-RapidAPI-Key': '14eb65f89dmsha879804ecefee7cp1f6e81jsn88081e5a0389',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '9ce596ddd1msh1c865699302d99fp141e10jsnbeac67a74d3a',
  },
};

export const mentalOptions = {
  method: 'GET',
  url: 'https://mental-health-info-api.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Key': '14eb65f89dmsha879804ecefee7cp1f6e81jsn88081e5a0389',
    'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
