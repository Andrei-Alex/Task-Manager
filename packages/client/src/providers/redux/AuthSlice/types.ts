export interface IAuth {
  auth: {
    token: string | null;
    user: User | null;
  };
}

export type User = {
  id: string;
  full_name: string;
  email: string;
};
