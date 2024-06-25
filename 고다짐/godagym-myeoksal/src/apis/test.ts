import axios from "axios";

export const getTest = async () => {
  const res = await axios.get("http://himchan.synology.me:30005/guide/list");
  return res.data;
};
