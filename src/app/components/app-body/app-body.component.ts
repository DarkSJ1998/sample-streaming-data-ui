import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css'],
})
export class AppBodyComponent implements OnInit {
  constructor(private userService: UsersService) {}
  code: string = 'No API calls made yet';
  loading: boolean = false;
  users: any = [];

  ngOnInit(): void {}

  makeReq = () => {
    console.debug('makeReq');
    this.code = 'Processing...';
    this.loading = true;
    this.users = [];

    this.userService.getUsersUrl().subscribe((res: any) => {
      console.debug(res);
      this.code = JSON.stringify(res);
      this.loading = false;
      this.users = res;
    });
  };

  makeAsyncReq = (method: number) => {
    console.debug('makeAsyncReq');
    this.code = 'Processing...';
    this.loading = true;
    this.users = [];

    this.userService.getAsyncUsersUrl(method).subscribe((res: any) => {
      console.debug(res);
      this.code = JSON.stringify(res);
      this.loading = false;
      this.users = res;
    });
  };

  makeAsyncReqXhr = (method: number) => {
    console.debug('makeAsyncReqXhr');
    this.code = 'Processing...';
    this.loading = true;
    this.users = [];

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 3) {
        console.debug(`\nReady State: ${xhr.readyState}`);
        console.debug(`ResponseText: ${xhr.responseText}`);
        let modifiedJson =
          xhr.responseText.slice(0, xhr.response.length - 2) + ' ]';
        console.debug(`modifiedJson: ${modifiedJson}`);
        this.code = modifiedJson;
        this.users = JSON.parse(modifiedJson);
      } else if (xhr.status === 200 && xhr.readyState === 4) {
        console.debug(`\nReady State: ${xhr.readyState}`);
        console.debug(`ResponseText: ${xhr.responseText}`);
        this.code = xhr.responseText;
        this.loading = false;
        this.users = JSON.parse(xhr.responseText);
      }
    };

    xhr.open('GET', 'http://localhost:9000/api/users/async/method' + method);
    xhr.send();
  };
}
