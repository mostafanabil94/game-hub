import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "408805058a6c419c9de4ad6919eaa0cd",
  },
});
