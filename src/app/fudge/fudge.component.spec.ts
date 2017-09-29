import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FudgeComponent } from './fudge.component';

describe('FudgeComponent', () => {
  let component: FudgeComponent;
  let fixture: ComponentFixture<FudgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FudgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
