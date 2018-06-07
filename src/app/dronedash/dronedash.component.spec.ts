import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DronedashComponent } from './dronedash.component';

describe('DronedashComponent', () => {
  let component: DronedashComponent;
  let fixture: ComponentFixture<DronedashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DronedashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
