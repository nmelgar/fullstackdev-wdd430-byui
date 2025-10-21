import { Component, EventEmitter, Output } from '@angular/core';
import { ToggleUserMenuDirective } from '../directives/toggle-user-menu.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToggleUserMenuDirective],
  templateUrl: './header.html',
  // styleUrl: './header.css'
})
export class HeaderComponent {
  @Output() selectedFeatureEvent = new EventEmitter<string>();
  onSelected(selectedEvent: string): void {
    this.selectedFeatureEvent.emit(selectedEvent);
  }
}
