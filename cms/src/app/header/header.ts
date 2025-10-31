import { Component } from '@angular/core';
import { ToggleUserMenuDirective } from '../directives/toggle-user-menu.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToggleUserMenuDirective, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  // styleUrl: './header.css'
})
export class HeaderComponent {
  // navigation is handled via routerLink in the template
}
