import { Injectable } from '@angular/core';
import {UserCreationDto} from '../models/users/user-creation-dto';
import {UserResultDto} from '../models/users/user-result-dto';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {UserUpdateDto} from '../models/users/user-update-dto';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  createUser$(userToCreate: UserCreationDto): Observable<UserResultDto> {
    return this.http.post<UserResultDto>(environment.apiUrl + environment.routes.users.create, userToCreate);
  }

  getAllUsers$(): Observable<UserResultDto[]> {
    return this.http.get<UserResultDto[]>(environment.apiUrl + environment.routes.users.getAll, {headers: {"Authorization": `Bearer ${this.authService.getToken()}`}});
  }

  updateUserById$(userToUpdate: UserUpdateDto): Observable<UserResultDto> {
    return this.http.put<UserResultDto>(environment.apiUrl + environment.routes.users.update, userToUpdate);
  }

  getUserById$(id: string): Observable<UserResultDto> {
    const url = environment.apiUrl + environment.routes.users.getById.replace(":id", id);
    return this.http.get<UserResultDto>(environment.apiUrl + environment.routes.users.getById + id);
  }

  deleteUserById$(id: string): Observable<Boolean> {
    return this.http.delete<boolean>(environment.apiUrl + environment.routes.users.delete + id);
  }
}
