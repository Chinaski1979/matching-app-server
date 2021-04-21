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
  const { textFilter } = queryParams;
  const possibleParams = Object.keys(queryParams);
  let query = '';
  
  if (possibleParams.some(filter => (typeof queryParams[filter] === 'string' || typeof queryParams[filter] === 'number'))) {
    const text = textFilter ? `&query=${textFilter}` : '';
    query = `${text}`
  }
  return query;
};

const responseHandler = (response) => response.data.items.map(item => item.answers);

export const getDeveloperResponses = async (queryParams = {}) => {
  try {
    const query = queryHandler(queryParams);
    const response = await instance.get(`forms/${env.DEVELOPER_FORM_ID}/responses?completed=true${query.length ? query : ''}`);
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
