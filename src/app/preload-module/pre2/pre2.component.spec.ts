import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pre2Component } from './pre2.component';

describe('Pre2Component', () => {
  let component: Pre2Component;
  let fixture: ComponentFixture<Pre2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pre2Component]
    });
    fixture = TestBed.createComponent(Pre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
