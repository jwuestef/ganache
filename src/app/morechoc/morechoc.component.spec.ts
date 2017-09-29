import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorechocComponent } from './morechoc.component';

describe('MorechocComponent', () => {
  let component: MorechocComponent;
  let fixture: ComponentFixture<MorechocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorechocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorechocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
