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
        firstName: 'Мария',
        lastName: 'Николова',
        email: "dsfsd@as.ss",
        city: 'София',
        favorites: 24,
        profilePic: '/images/profile-pic.png',
        created_at: '24.04.2026'
      },
      {
        _id: "2",
        firstName: 'Елена',
        lastName: 'Николова',
        email: "dsfsd@as.ss",
        city: 'Пловдив',
        favorites: 18,
        profilePic: '/images/profile-pic.png',
        created_at: '24.04.2026'
      },
      {
        _id: "3",
        firstName: 'Ива',
        lastName: 'Николова',
        email: "dsfsd@as.ss",
        city: 'Варна',
        favorites: 32,
        profilePic: '/images/profile-pic.png',
        created_at: '24.04.2026'
      },
      {
        _id: "4",
        firstName: 'Десислава',
        lastName: 'Николова',
        email: "dsfsd@as.ss",
        city: 'Бургас',
        favorites: 15,
        profilePic: '/images/profile-pic.png',
        created_at: '24.04.2026'
      },
      {
        _id: "5",
        firstName: 'Анна',
        lastName: 'Николова',
        email: "dsfsd@as.ss",
        city: 'Русе',
        favorites: 27,
        profilePic: '/images/profile-pic.png',
        created_at: '24.04.2026'
      }
    ];
  }

}
