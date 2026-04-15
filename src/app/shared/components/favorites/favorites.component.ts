import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  @Input() count = 0;
  @Input() isFavorited = false;
  @Input() disabled = false;

  @Output() toggle = new EventEmitter<void>();

  onClick(event: Event) {
    event.stopPropagation();

    if (this.disabled) return;

    this.toggle.emit();
  }

  get tooltip(): string {
    if (this.disabled) {
      return 'Общо харесвания';
    }

    if (this.isFavorited) {
      return 'Премахни от любими';
    }

    return 'Добави в любими';
  }
}
