export interface IAuthResponse {
  username: string;
  email: string;
  access_token?: string;
}
export interface IToken {
  access_token: string;
}
export interface IAuthRequest {
  password: string;
  email: string;
}
