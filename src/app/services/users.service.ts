import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  usersUrl: string = 'http://localhost:9000/api/users';
  asyncUsersUrl: string = 'http://localhost:9000/api/users/async/method2';

  getUsersUrl = () => this.http.get(this.usersUrl);

  getAsyncUsersUrl = () =>
    this.http.get(this.asyncUsersUrl, {
      observe: 'body',
      responseType: 'json',
    });
}
