import {
  GET_METHOD,
  POST_METHOD,
  PATCH_METHOD,
  DELETE_METHOD,
  PUT_METHOD,
} from "./ApiMethods";
import { ApiConstants } from "./ApiConstants";

type searchUser = string;
type page = number;

export const getUsers = async (search: searchUser = "", page: page = 0) => {
  try {
    if (search === "" && page > 0) {
      let response = await GET_METHOD("api/user", "?page=" + page);
      return response;
    } else {
      let filter = "";
      if (search != "") {
        filter = filter + "?search=" + search;
        if (page > 0) {
          filter = filter + "&page=" + page;
        }
      } else {
        if (page > 0) {
          filter = filter + "?page=" + page;
        }
      }
      let response = await GET_METHOD("api/user" + filter);
      return response;
    }
  } catch (error) {
    return error;
  }
};


export const getProductGroups = async (user_id:string='') => {
  try {
    console.log('userAPI user_id =====', user_id);
    // let response = await GET_METHOD("api/product-groups/data", "5eb0665fc57eb12078126505");
    let response = await GET_METHOD("api/product-groups/data-user/", user_id);
    console.log("response====", response);
    return response;
  } catch (error) {
    console.log("response====", error);
    return error;
  }
};
type id = string;
type state = boolean;

export const getAllUsers = async () => {
  try {
    let response = await GET_METHOD("api/user/populate", "");
    console.log("response====", response);
    return response;
  } catch (error) {
    console.log("response====", error);
    return error;
  }
};

export const putUserStatus = async (id: id = "", status: boolean) => {
  try {
      let response = await PUT_METHOD('api/user/'+id, 'active='+status);
      console.log("response====>", response);
      return response;
  } catch (error) {
    console.log("response====>", error);
    return error;
  }
};

export const putUserRole = async (id: id = "", roleId: string) => {
  try {
      let response = await PUT_METHOD('api/user/'+id, 'roleId='+roleId);
      console.log("response====>", response);
      return response;
  } catch (error) {
    console.log("response====>", error);
    return error;
  }
};


export const postCreateUser = async (details: any) => {
  try {
    let response = await POST_METHOD("api/user", details);
    console.log("response====>>", response);
    return response;
  } catch (error) {
    console.log("response====>>", error);
    return error;
  }
};


export const updateUser = async (id:string, dataObject:any) => {
  try {
    let response = await PUT_METHOD('api/user/'+id, dataObject);
    console.log("response====>", response);
    return response;
  } catch (error) {
    console.log("response====", error);
    return error;
  }
};
