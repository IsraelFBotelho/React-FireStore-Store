import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/produtos",
});

api.defaults.headers.patch['Content-Type'] ='application/json;charset=utf-8';
api.defaults.headers.patch['Access-Control-Allow-Origin'] = '*';

export default api;
