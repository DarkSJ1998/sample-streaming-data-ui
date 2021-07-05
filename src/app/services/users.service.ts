import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  usersUrl: string = 'http://localhost:9000/api/users';
  asyncUsersUrl: string = 'http://localhost:9000/api/users/async/method';

  getUsersUrl = () => this.http.get(this.usersUrl);

  getAsyncUsersUrl = (method: number) =>
    this.http.get(this.asyncUsersUrl + method, {
      observe: 'body',
      responseType: 'json',
    });
}
