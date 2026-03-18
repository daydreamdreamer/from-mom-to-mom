import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRecipesItemComponent } from './recent-recipes-item.component';

describe('RecentRecipesItemComponent', () => {
  let component: RecentRecipesItemComponent;
  let fixture: ComponentFixture<RecentRecipesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentRecipesItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentRecipesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
