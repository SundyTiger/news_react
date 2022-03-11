import axios from "axios";

const newsArticle = axios.create({
  baseURL: "http://localhost:3333/articles",
  headers: {
    "Content-Type": "application/json",
  },
});

export default newsArticle;
