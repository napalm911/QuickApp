import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimboloComponent } from './simbolo.component';

describe('SimboloComponent', () => {
  let component: SimboloComponent;
  let fixture: ComponentFixture<SimboloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimboloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimboloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
