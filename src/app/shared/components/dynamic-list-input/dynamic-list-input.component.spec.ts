import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListInputComponent } from './dynamic-list-input.component';

describe('DynamicListInputComponent', () => {
  let component: DynamicListInputComponent;
  let fixture: ComponentFixture<DynamicListInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicListInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
