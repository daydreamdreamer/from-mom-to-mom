import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMamasItemComponent } from './super-mamas-item.component';

describe('SuperMamasItemComponent', () => {
  let component: SuperMamasItemComponent;
  let fixture: ComponentFixture<SuperMamasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperMamasItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperMamasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
