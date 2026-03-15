import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMamasComponent } from './super-mamas.component';

describe('SuperMamasComponent', () => {
  let component: SuperMamasComponent;
  let fixture: ComponentFixture<SuperMamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperMamasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperMamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
