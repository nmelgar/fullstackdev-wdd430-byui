import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { Servers } from './servers/servers';
import { SuccessAlert } from './success-alert/success-alert';
import { WarningAlert } from './warning-alert/warning-alert';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ServerComponent, ServerComponent, Servers, SuccessAlert, WarningAlert],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
