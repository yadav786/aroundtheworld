import {
  GET_METHOD,
  POST_METHOD,
  PATCH_METHOD,
  DELETE_METHOD,
  PUT_METHOD,
} from "./ApiMethods";
import { ApiConstants } from './ApiConstants';

type searchUser = string;
type page = number;

export const getRoles = async (search: searchUser = '', page: page = 0) => {
     try {
          if (search === '' && page > 0) {
               let response = await GET_METHOD('api/role', '?page=' + page);
               return response;
          } else {
               let filter = '';
               if (search != '') {
                    filter = filter + '?search=' + search;
                    if (page > 0) {
                         filter = filter + '&page=' + page;
                    }
               }
               else {
                    if (page > 0) {
                         filter = filter + '?page=' + page;
                    }
               }
               let response = await GET_METHOD('api/role' + filter);
               console.log(filter);
               return response;
          }

          // console.log('response====', response)
          //  return response;
     }
     catch (error) {
          console.log('response====', error);
          return error;
     }
}

export const getAllRoles = async () => {
     try {
          let response = await GET_METHOD("api/role/populate", "");
          console.log("response====", response);
          return response;
     } catch (error) {
          console.log("response====", error);
          return error;
     }
};

export const putRoleStatus = async (roleId: string, status: boolean) => {
  try {
      let response = await PUT_METHOD('api/role/'+roleId, 'active='+status);
      console.log("response====>", response);
      return response;
  } catch (error) {
    console.log("response====>", error);
    return error;
  }
};

export const postCreateUserRole = async (details: any) => {
  try {
    let response = await POST_METHOD("api/role", details);
    console.log("response====>>", response);
    return response;
  } catch (error) {
    console.log("response====>>", error);
    return error;
  }
};


export const updateUserRole = async (id:string, dataObject:any) => {
     try {
       let response = await PUT_METHOD('api/role/'+id, dataObject);
       console.log("response====>", response);
       return response; 
     } catch (error) {
       console.log("response====", error);
       return error;
     }
   };