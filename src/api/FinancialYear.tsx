import {
  GET_METHOD,
  POST_METHOD,
  PATCH_METHOD,
  DELETE_METHOD,
} from "./ApiMethods";
import { ApiConstants } from "./ApiConstants";

type searchUser = string;
type page = number;

export const getYears = async () => {
  try {
    let response = await GET_METHOD("api/fiscal-years?module=standard","");
    console.log(response);
    return response;
  }
  catch (error) {
    console.log("response====", error);
    return error;
  }
}

