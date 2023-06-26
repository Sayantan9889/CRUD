import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration, Login } from 'src/app/Class/AuthClass/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registration_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";
  login_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";
  profile_api = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";

  constructor(private http:HttpClient) { }

  register_user(regData:any):Observable<Registration[]> {
    return this.http.post<Registration[]>(this.registration_api, regData);
  }

  login_user(logData:any):Observable<Login[]> {
    return this.http.post<Login[]>(this.login_api,logData);
  }
}
