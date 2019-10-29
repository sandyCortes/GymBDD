import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreshipComponent } from './membreship.component';

describe('MembreshipComponent', () => {
  let component: MembreshipComponent;
  let fixture: ComponentFixture<MembreshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
