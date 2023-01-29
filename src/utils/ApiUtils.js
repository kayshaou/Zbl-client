import axios from "axios";

const baseURL = process.env.REACT_APP_REST_API_URL;
const basePort = process.env.REACT_APP_REST_API_PORT
  ? ":" + process.env.REACT_APP_REST_API_PORT
  : "";

const _getUrl = (path) => {
  return baseURL + basePort + path;
};

const ApiUtils = {
  get: async (path) => {
    const response = await axios.get(_getUrl(path));
    console.log(response);
    return response;
  },
  post: (path, requestBody, headers) => {
    const response = axios.post(_getUrl(path), requestBody, headers);
    return response;
  },
  delete: (path, uniqueId) => {
    const response = axios.delete();
  },
};

export default ApiUtils;
