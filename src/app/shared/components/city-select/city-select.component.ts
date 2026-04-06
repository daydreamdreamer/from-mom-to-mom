import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CITIES } from '../../data/cities.data';

@Component({
  selector: 'app-city-select',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './city-select.component.html',
  styleUrl: './city-select.component.css'
})
export class CitySelectComponent {
  @Input() form!: FormGroup;
  @Input() controlName!: string;
  @Input() wrapperClass: string = '';

  cities = CITIES;
}
