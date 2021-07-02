import { Component, OnInit } from '@angular/core';

// import { name, version } from '../../../../package.json';
const appPackageJson: any = {
  name: 'sample-streaming-data-ui',
  version: '1.0.0',
};

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {
  appName: string;
  appVersion: string;

  constructor() {
    this.appName = appPackageJson.name;
    this.appVersion = appPackageJson.version;
  }

  ngOnInit(): void {}
}
