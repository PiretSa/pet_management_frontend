import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpetComponent } from './viewpet.component';

describe('ViewpetComponent', () => {
  let component: ViewpetComponent;
  let fixture: ComponentFixture<ViewpetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpetComponent]
    });
    fixture = TestBed.createComponent(ViewpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
