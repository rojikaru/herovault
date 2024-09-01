import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedFieldComponent } from './outlined-field.component';

describe('OutlinedFieldComponent', () => {
  let component: OutlinedFieldComponent;
  let fixture: ComponentFixture<OutlinedFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlinedFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlinedFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
