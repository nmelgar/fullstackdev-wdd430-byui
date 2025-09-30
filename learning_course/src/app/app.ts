import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers';
import { SuccessAlert } from './success-alert/success-alert';
import { WarningAlert } from './warning-alert/warning-alert';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ServerComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlert,
    WarningAlert,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
