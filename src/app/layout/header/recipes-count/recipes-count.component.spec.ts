import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesCountComponent } from './recipes-count.component';

describe('RecipesCountComponent', () => {
  let component: RecipesCountComponent;
  let fixture: ComponentFixture<RecipesCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
