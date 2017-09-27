import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolatesComponent } from './chocolates.component';

describe('ChocolatesComponent', () => {
  let component: ChocolatesComponent;
  let fixture: ComponentFixture<ChocolatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocolatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
