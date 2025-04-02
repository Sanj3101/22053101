import axios from "axios";

const API_BASE = "/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAzMjk4LCJpYXQiOjE3NDM2MDI5OTgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImMzNWI4YjBhLTY4ODYtNGY3Yi1iNzhkLTdhM2Y1NTQ2M2Q2YyIsInN1YiI6IjIyMDUzMTAxQGtpaXQuYWMuaW4uY29tIn0sImVtYWlsIjoiMjIwNTMxMDFAa2lpdC5hYy5pbi5jb20iLCJuYW1lIjoic2FuamFuYSBiaXN3YXMiLCJyb2xsTm8iOiIyMjA1MzEwMSIsImFjY2Vzc0NvZGUiOiJud3B3cloiLCJjbGllbnRJRCI6ImMzNWI4YjBhLTY4ODYtNGY3Yi1iNzhkLTdhM2Y1NTQ2M2Q2YyIsImNsaWVudFNlY3JldCI6InRydU5XV1hQV1JDS3Z0VVkifQ.ZRMquNEQakAWMmhDLchTnhDVxkW7KsZQ1KlNTvNrzT0";

const api = axios.create({
  baseURL: API_BASE,
  headers: { Authorization: `Bearer ${TOKEN}` }
});

//user
export const fetchUsers = async () => {
  const { data } = await api.get("/users");
  return data.users;
};

//post
export const fetchUserPosts = async (userId) => {
  const { data } = await api.get(`/users/${userId}/posts`);
  return data.posts;
};

//comments
export const fetchPostComments = async (postId) => {
  const { data } = await api.get(`/posts/${postId}/comments`);
  return data.comments;
};
