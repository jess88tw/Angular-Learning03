import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `` 可以直接寫 html 在裡面
  templateUrl: './servers.component.html',
  // styles: `` 可以直接寫 style 在裡面
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  // ---------------------------------------------
  // Propetry binding
  // ---------------------------------------------
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  // ---------------------------------------------
  // Event binding
  // ---------------------------------------------
  serverCreatStatus = 'No server was created!';
  serverName = 'TestServer';

  // ngIf
  serverCreated = false;

  // ngFor
  servers = ['testServer 1', 'testServer 2'];

  onCreateServer() {
    this.servers.push('testServer New');
    this.serverCreatStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
  }

  // $event binding
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {}
}
