import { User } from './../_models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = new Observable<User>();

  constructor(private http: HttpClient) {
    this.currentUser$ = this.currentUserSource.asObservable();

    this.getCurrentUser();
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  getCurrentUser(): User | undefined {
    const us = localStorage.getItem('user');
    if (us !== null)
    {
      const user: User = JSON.parse(us);
      this.currentUserSource.next(user);
      return user;
    }
    else {
      this.currentUserSource.next(undefined);
    }
    return undefined;
  }

  register(model: any){
      return this.http.post(this.baseUrl + 'account/register', model).pipe(
        map((user: any) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
          return user;
        })
      );
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(undefined);
  }
}
