import axios from "axios";

const instance = axios.create({
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '4f32c966-739a-4c38-b218-70108b674d3f'
  }
})

export const authAPI = {
  me() {
    return instance.get('auth/me').then(response => response.data)
  }
  // authData() {
  //   return instance.get('auth/me').then(response => response.data)
  // }
}


