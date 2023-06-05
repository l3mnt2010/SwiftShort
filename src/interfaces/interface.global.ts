export interface LoginUser {
  email: string;
  roles: string;
  access_token: string | null;
}

export interface Login {
  email: string;
  password: string;
}

export interface Login_new {
  email: string;
  password: string;
  remember: boolean;
}

export interface Users {
  id: number;
  name: string;
  roles: string;
}
export interface User_Data {
  data: Users[];
}

export interface ResRegister {
  message: string | null;
  email: string | null;
  name: string | null;
}

export interface Register {
  roles: string;
  email: string;
  name: string;
  password: string;
}

export interface LoginResponse {
  user: LoginUser;
}

export interface AuthState {
  user: LoginUser | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthRegister {
  response: ResRegister | UserAlreadyExist | null;
  isLoading: boolean;
  error: string | null;
  isAlreadyExist: boolean;
}

export interface UserAlreadyExist {
  statusCode: number;
  message: string;
}
