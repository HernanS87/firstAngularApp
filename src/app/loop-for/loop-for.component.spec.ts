import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopForComponent } from './loop-for.component';

describe('LoopForComponent', () => {
  let component: LoopForComponent;
  let fixture: ComponentFixture<LoopForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoopForComponent]
    });
    fixture = TestBed.createComponent(LoopForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
