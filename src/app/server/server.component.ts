import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  // ---------------------------------------------
  // String interpolation
  // ---------------------------------------------

  serverId = 10;
  serverStatus = 'offline';

  // 方法也可以用在 string interpolation
  // getServerStatus() {
  //   return this.serverStatus;
  // }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  fontWhite() {
    return this.serverStatus === 'online' ? true : false;
  }
}
