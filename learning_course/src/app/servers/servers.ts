import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  imports: [],
  templateUrl: './servers.html',
  styleUrl: './servers.css',
})
export class ServersComponent {
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  userName: string = '';

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onUpdateUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
