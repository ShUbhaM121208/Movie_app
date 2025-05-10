import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTkwODdiOGM4NTUzYTQ1NDk0YTcwNGM0ZjA5NTJlMCIsIm5iZiI6MTcxNTAyOTUwNi4yNDUsInN1YiI6IjY2Mzk0NjAyNWFkNzZiMDEyYzA1ZWFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZdgY8Xsf78HgZL9Ah2tqG27dXwAgkS2KrgpGeVl_11I',
    Accept: "application/json"
  },
});

export default instance;
