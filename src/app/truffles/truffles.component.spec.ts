import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrufflesComponent } from './truffles.component';

describe('TrufflesComponent', () => {
  let component: TrufflesComponent;
  let fixture: ComponentFixture<TrufflesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrufflesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrufflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
