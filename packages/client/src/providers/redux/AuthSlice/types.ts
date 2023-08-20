export interface IAuth {
  token: string | null;
  user: User | null;
  error: string | null;
}

export type User = {
  id: string;
  full_name: string;
  email: string;
};
