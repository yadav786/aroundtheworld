import axios from "axios";

axios.defaults.validateStatus = () => {
  return true;
};
console.log(process);
const API = process.env.REACT_APP_SERVER_API_URL;

type urlRoute = string | undefined;
type paramsRoute = string | undefined;

// GET
export const GET_METHOD = async (url: urlRoute = "", params = "") => {
  const result = await axios.get(API + url + params);
  return result;
};
// INSERT
export const POST_METHOD = async (url: urlRoute = "", params = "") => {
  // const result = await axios.post(API+url, JSON.parse(params));
  const result = await axios.post(API + url, params);
  return result;
};

// DELETE
export const DELETE_METHOD = async (url: urlRoute = "", params = "") => {
  const result = await axios.delete(API + url + params);
  return result;
};
// UPDATE
export const PATCH_METHOD = async (
  url: urlRoute = "",
  params: paramsRoute = ""
) => {
  const result = await axios.patch(API + url, JSON.parse(params));
  return result;
};

// PUT
export const PUT_METHOD = async (url: urlRoute = "", params = "") => {
  // console.log(API+url, params);
  const result = await axios.put(API + url, params);
  return result;
};
