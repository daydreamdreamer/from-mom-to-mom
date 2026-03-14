import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRecipesComponent } from './recent-recipes.component';

describe('RecentRecipesComponent', () => {
  let component: RecentRecipesComponent;
  let fixture: ComponentFixture<RecentRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
