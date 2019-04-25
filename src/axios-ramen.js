import axios from "axios";

const instance = axios.create({
  baseURL: "https://ramen-app-60399.firebaseio.com/"
});

export default instance;
