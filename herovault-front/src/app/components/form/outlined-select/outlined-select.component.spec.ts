import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedSelectComponent } from './outlined-select.component';

describe('OutlinedSelectComponent', () => {
  let component: OutlinedSelectComponent;
  let fixture: ComponentFixture<OutlinedSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlinedSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlinedSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
