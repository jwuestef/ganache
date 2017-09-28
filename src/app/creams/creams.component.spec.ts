import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreamsComponent } from './creams.component';

describe('CreamsComponent', () => {
  let component: CreamsComponent;
  let fixture: ComponentFixture<CreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
