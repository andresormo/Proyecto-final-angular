import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Observable,
  ReplaySubject,
  tap,
} from 'rxjs';
import { IUser, IUserSignInResponse, UserRequestBody} from './models/auth.models';

// const AUTH_URL = 'https://goodjob-ggtu.vercel.app/users';


const AUTH_URL = 'http://localhost:8000/users'
const TOKEN_KEY = 'jwt-auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private http: HttpClient, private router: Router) {
    const isLogged = this.isLogged();
    this.isLogged$.next(isLogged);
  }

  public getUserCompany(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${AUTH_URL}`);
  }

public getUserById(id:string):Observable<IUser>{
  return this.http.get<IUser>(`${AUTH_URL}/${id}`)
}

  public login(user: IUser): Observable<IUserSignInResponse> {
    return this.http.post<IUserSignInResponse>(`${AUTH_URL}/login`, user).pipe(
      tap((res: IUserSignInResponse) => {
        const userStorage = JSON.stringify({
          token: res.token,
          email: res.userToLog.email,
          id: res.userToLog._id,
        });
        localStorage.setItem(TOKEN_KEY, userStorage);
        this.isLogged$.next(true);
        this.router.navigate(['company-profile']);
      })
    );
  }

  public signUp(body: UserRequestBody): Observable<IUser> {
    return this.http.post<IUser>(`${AUTH_URL}/`, body).pipe(
      tap((user)=>{
        this.router.navigate(['company-profile'])
      })
    );
  }

  public logOut() {
    const removeToken = localStorage.removeItem(TOKEN_KEY);
    this.isLogged$.next(false);
    if (removeToken != null) {
      this.router.navigate(['home']);
    }
  }

  public isLogged(): boolean {
    const userToken = localStorage.getItem(TOKEN_KEY);
    if (!userToken) {
      return false;
    }
    const isValidToken = JSON.parse(userToken)?.token;
    return !!isValidToken;
  }

  public gettoken() {
    const userToken = localStorage.getItem(TOKEN_KEY);
    return userToken ? JSON.parse(userToken)?.token : null;
  }
  public getUserId(): string {
    const userToken = localStorage.getItem(TOKEN_KEY);
    if (userToken) {
      const user = JSON.parse(userToken);
      return user.id;
    }
    throw new Error('No se ha encontrado un usuario logueado.');

  }

}
