import axios from 'axios';

const token = 'HpWeYH82tiBmcN7ywLbWNaV3pYajpae6j7o85p8JQ7nv';
const instance = axios.create({
  baseURL: 'https://api.typeform.com/',
  timeout: 1000,
  headers: {
    'Authorization': `Bearer ${token}`,
    'content-type': 'application/json',
  },
});

const env = process.env;

const queryHandler = (queryParams) => {
  const validQueries = ['completed', 'query', 'since', 'until', 'page_size', 'after'];
  const queryKeys = Object.keys(queryParams);
  const allValidQuerys = queryKeys.every(queryKey => validQueries.includes(queryKey));

  if (!allValidQuerys) throw Error(`Invalid query. Only valid queries are: ${validQueries}`);

  let query = '';
  if (queryKeys.length) {
    query = '?';
    queryKeys.forEach((queryKey, i) => {
      if (validQueries.includes(queryKey)) {
        const addAndSymbol = i > 0 ? '&' : '';
        query += `${addAndSymbol}${queryKey}=${queryParams[queryKey]}`
      }
    });
  }
  return query;
};

const responseHandler = (response) => response.data.items.map(item => item.answers);

export const getDeveloperResponses = async (queryParams = {}) => {

  try {
    console.log('queryParams111', queryParams);
    console.log(`forms/${env.DEVELOPER_FORM_ID}/responses${queryHandler(queryParams)}`);
    const response = await instance.get(`forms/${env.DEVELOPER_FORM_ID}/responses${queryHandler(queryParams)}`);
    return responseHandler(response);
  } catch (err) {
    throw Error(err);
  } 
};

export const getClientResponses = async (queryParams = {}) => {
  try {
    const query = queryHandler(queryParams);
    const response = await instance.get(`forms/${env.CLIENT_FORM_ID}/responses?completed=true${query.length ? query : ''}`);
    return responseHandler(response);
  } catch (err) {
    throw Error(err);
  } 
};

export const getMatchingDevelopers = async (query) => {
  try {
    const response = await instance.get(`forms/${env.DEVELOPER_FORM_ID}/responses?completed=true&query=${query}`);
    return responseHandler(response);
  } catch (err) {
    throw Error(err);
  } 
};
