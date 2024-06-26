import { api } from ".";

export const getTest = async () => {
  const res = await api.get("/guide/list");
  return res.data;
};
