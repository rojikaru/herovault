import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedChiplistComponent } from './outlined-chiplist.component';

describe('OutlinedChiplistComponent', () => {
  let component: OutlinedChiplistComponent;
  let fixture: ComponentFixture<OutlinedChiplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlinedChiplistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlinedChiplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
