import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadModuleComponent } from './preload-module.component';

describe('PreloadModuleComponent', () => {
  let component: PreloadModuleComponent;
  let fixture: ComponentFixture<PreloadModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreloadModuleComponent]
    });
    fixture = TestBed.createComponent(PreloadModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
