import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleUserMenu]',
  standalone: true
})
export class ToggleUserMenuDirective {
  private isOpen = false;
  private menuElement: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.menuElement = this.renderer.createElement('div');
    this.renderer.addClass(this.menuElement, 'dropdown-menu');
    this.renderer.setAttribute(this.menuElement, 'style', 'display: none; position: absolute;');

    const options = ['Login', 'Other', 'Logout'];

    for (const option of options) {
      const item = this.renderer.createElement('a');
      this.renderer.addClass(item, 'dropdown-item');
      this.renderer.setProperty(item, 'innerText', option);
      this.renderer.listen(item, 'click', () => alert(`${option} clicked!`));
      this.renderer.appendChild(this.menuElement, item);
    }

    const parent = this.el.nativeElement.parentElement;
    this.renderer.appendChild(parent, this.menuElement);
  }

  @HostListener('click')
  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.renderer.setStyle(this.menuElement, 'display', this.isOpen ? 'block' : 'none');
  }

  @HostListener('document:click', ['$event.target'])
    closeMenu(target: EventTarget | null) {
    if (
        target instanceof HTMLElement &&
        !this.el.nativeElement.contains(target) &&
        !this.menuElement.contains(target)
    ) {
        this.isOpen = false;
        this.renderer.setStyle(this.menuElement, 'display', 'none');
    }
  }
}
