import Articles from "./services";
const getNews = () => {
  return Articles.get();
};

export default getNews;
