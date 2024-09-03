import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedMultilineFieldComponent } from './outlined-multiline-field.component';

describe('OutlinedMultilineFieldComponent', () => {
  let component: OutlinedMultilineFieldComponent;
  let fixture: ComponentFixture<OutlinedMultilineFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlinedMultilineFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlinedMultilineFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
