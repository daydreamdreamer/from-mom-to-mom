import { Component, OnInit } from '@angular/core';
import { SuperMamasItemComponent } from '../../../shared/components/super-mamas-item/super-mamas-item.component';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-super-mamas',
  imports: [SuperMamasItemComponent],
  templateUrl: './super-mamas.component.html',
  styleUrl: './super-mamas.component.css'
})
export class SuperMamasComponent implements OnInit {
  superMamas: User[] = [];

  ngOnInit(): void {
    this.superMamas = [
      {
        _id: "1",
        username: 'Мария',
        city: 'София',
        favorites: 24,
        profilePic: '/images/profile-pic.png'
      },
      {
        _id: "2",
        username: 'Елена',
        city: 'Пловдив',
        favorites: 18,
        profilePic: '/images/profile-pic.png'
      },
      {
        _id: "3",
        username: 'Ива',
        city: 'Варна',
        favorites: 32,
        profilePic: '/images/profile-pic.png'
      },
      {
        _id: "4",
        username: 'Десислава',
        city: 'Бургас',
        favorites: 15,
        profilePic: '/images/profile-pic.png'
      },
      {
        _id: "5",
        username: 'Анна',
        city: 'Русе',
        favorites: 27,
        profilePic: '/images/profile-pic.png'
      }
    ];
  }

}
