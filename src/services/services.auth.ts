import {
  Login,
  LoginUser,
  Login_new,
  Register,
  ResRegister,
} from "@/interfaces/interface.global";

import axios, { AxiosResponse } from "axios";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com";

export const API = axios.create({
  baseURL: `https://swiftshort.onrender.com`,
});

class AuthLogin {
  async login(credentials: Login): Promise<LoginUser> {
    try {
      const response: AxiosResponse = await API.post("auth/login", credentials);
      const access_token: string = response.data.access_token;
      const email: string = response.data.email;
      const roles: string = response.data.roles;

      // localStorage.setItem("token", token);
      return { access_token: access_token, email: email, roles: roles };
    } catch (error) {
      throw new Error("Failed to login");
    }
  }
  async register(credentials: Register): Promise<ResRegister> {
    try {
      const response: AxiosResponse = await API.post<ResRegister>(
        "/auth/register",
        credentials
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to register");
    }
  }
  async logout(): Promise<void> {
    localStorage.removeItem("access_token");
  }
}
const authlogin = new AuthLogin();
export default authlogin;
