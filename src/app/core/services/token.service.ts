import { Injectable } from '@angular/core';
import {jwtDecode, JwtPayload} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  TOKEN_PATH = "authToken";

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_PATH);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_PATH, token);
  }

  deleteToken(): void {
    localStorage.removeItem(this.TOKEN_PATH);
  }

  isTokenValid(): boolean {
    let token = this.getToken();

    if (token == null){
      return false;
    }

    let decoded = jwtDecode<JwtPayload>(token!);
    return decoded.exp! * 1000 > new Date().getTime();
  }
}
