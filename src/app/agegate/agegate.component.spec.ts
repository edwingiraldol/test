import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgegateComponent } from './agegate.component';

describe('AgegateComponent', () => {
  let component: AgegateComponent;
  let fixture: ComponentFixture<AgegateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgegateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
