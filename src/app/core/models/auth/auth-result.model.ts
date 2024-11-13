export interface AuthResultModel {
  token: string;
}

export interface GoogleAuthResultModel {
  token: string;
  email: string;
  isNewUser: boolean;
}
