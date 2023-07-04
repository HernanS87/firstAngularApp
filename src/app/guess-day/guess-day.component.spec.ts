import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessDayComponent } from './guess-day.component';

describe('GuessDayComponent', () => {
  let component: GuessDayComponent;
  let fixture: ComponentFixture<GuessDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessDayComponent]
    });
    fixture = TestBed.createComponent(GuessDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
