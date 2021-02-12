import axios from "axios"
// import jwt_decode from "jwt-decode";
import { apiUrl } from "./variable";
import AsyncStorage from '@react-native-async-storage/async-storage';

// const signOut = (user: any, setUser: any, navigation: any) => {
//   setUser({
//     ...user,
//     isSignIn: false
//   })
//   AsyncStorage.setItem("user", JSON.stringify({
//     ...user,
//     isSignIn: false
//   }));
//   alert("정보가 만료되었습니다.\n다시 로그인해주세요.");
//   navigation.reset({index: 0, routes: [{name: 'Join'}]});
// }

// export const validateToken = async (user: any, setUser: any, navigation: any) => {
//   if(!user.accessToken || !user.refreshToken) {
//     signOut(user, setUser, navigation);
//     return false;
//   } else {
//     const decodedAccessToken: any = jwt_decode(user.accessToken);
//     const decodedRefreshToken: any = jwt_decode(user.refreshToken);
  
//     if (decodedAccessToken.exp * 1000 < Date.now()){
//       if (decodedRefreshToken.exp * 1000 < Date.now()) {
//         // refresh도 만료, 로그아웃
//         signOut(user, setUser, navigation);
//         return false;
//       } else {
//         // refresh로 access 재발급
//         const accessToken = await axios.post(`${apiUrl}/api/v1/token`, {
//           refreshToken: user.refreshToken
//         })
//           .then(res => {
//             if(!res) {
//               signOut(user, setUser, navigation);
//             } else {
//               setUser({
//                 ...user,
//                 accessToken: res.data
//               })
//               AsyncStorage.setItem("user", JSON.stringify({
//                 ...user,
//                 accessToken: res.data
//               }));
//               return res.data;
//             }
//           })
//           return accessToken;
//         }
//       } else {
//       return user.accessToken;
//     }
//   }
// }

// export const validateGet = async (url: string, user: any, setUser: any, navigation: any) => {
//   const accessToken = await validateToken(user, setUser, navigation);
//   if (accessToken) {
//     return axios.get(url, {
//         headers: {
//           "X-AUTH-TOKEN": accessToken
//         }
//       })
//       .then(res => res.data)
//   }
// }

// export const validatePost = async (url: string, user: any, setUser: any, navigation: any, body: any) => {
//   const accessToken = await validateToken(user, setUser, navigation);
//   if (accessToken) {
//     return axios.post(url, body, {
//         headers: {
//           "X-AUTH-TOKEN": accessToken
//         }
//       })
//       .then(res => res.data)
//   }
// }

// export const validatePatch = async (url: string, user: any, setUser: any, navigation: any, body: any) => {
//   const accessToken = await validateToken(user, setUser, navigation);
//   if (accessToken) {
//     return axios.patch(url, body, {
//         headers: {
//           "X-AUTH-TOKEN": accessToken
//         }
//       })
//       .then(res => res.data)
//   }
// }

// export const pageFetcher = async (url: string, user: any, setUser: any, navigation: any) => 
//   validateGet(url, user, setUser, navigation)
//     .then(res => res.data.content)

export const pageNoAuthFetcher = (url: string) => 
    axios.get(url)
      .then(res => res.data.data.content)


// export const listFetcher = async (url: string, user: any, setUser: any, navigation: any) => 
//   validateGet(url, user, setUser, navigation)
//     .then(res => res.data)

export const listFetcher = async (url: string, user: any, setUser: any, navigation: any) => 
  axios.get(url)
    .then(res => res.data)


// export const singleFetcher = async (url: string, user: any, setUser: any, navigation: any) => 
//   validateGet(url, user, setUser, navigation)
//     .then(res => res.data)

