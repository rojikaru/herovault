import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleViewComponent } from './single-view.component';

describe('SingleViewComponent', () => {
  let component: SingleViewComponent;
  let fixture: ComponentFixture<SingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
