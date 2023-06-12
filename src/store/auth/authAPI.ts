import {
  Login,
  LoginUser,
  Register,
  ResRegister,
} from "@/interfaces/interface.global";
import axios, { AxiosResponse } from "axios";

const API = axios.create({
  baseURL: "https://swiftshort.onrender.com",
});

class AuthAPI {
  async login(credentials: Login): Promise<LoginUser> {
    try {
      const response: AxiosResponse = await API.post("auth/login", credentials);
      const access_token: string = response.data.access_token;
      const email: string = response.data.email;
      const roles: string = response.data.roles;
      return { access_token: access_token, email: email, roles: "user" };
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
  async resetpassword(data: any): Promise<any> {
    try {
      const response = await API.put("/user/reset-password");
      const res = response.data;
      return res;
    } catch (e) {
      console.log(e);
      throw new Error("failed to reset password !");
    }
  }
  async logout(): Promise<void> {
    localStorage.removeItem("token");
  }
}
const authapi = new AuthAPI();
export default authapi;
