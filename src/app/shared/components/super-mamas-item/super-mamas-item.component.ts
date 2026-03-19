import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-super-mamas-item',
  imports: [],
  templateUrl: './super-mamas-item.component.html',
  styleUrl: './super-mamas-item.component.css'
})
export class SuperMamasItemComponent {
  @Input({required: true}) user!: User;
}
