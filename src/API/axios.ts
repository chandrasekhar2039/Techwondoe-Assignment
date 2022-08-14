import axios from 'axios';

const BASEURL = 'https://cdn.contentful.com';
const token = process.env.REACT_APP_API_KEY as string;

// axios instance
// For Authentication call
const Instance = axios.create({
  baseURL: BASEURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default Instance;
