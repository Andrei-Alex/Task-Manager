export type AuthResponse =
  | {
      username: string;
      email: string;
      access_token?: string;
    }
  | string;
export interface IAuthResponse {
  username?: string;
  email?: string;
  access_token?: string;
}
export type Token = {
  access_token: string;
};
export interface IAuthRequest {
  password: string;
  email: string;
}
