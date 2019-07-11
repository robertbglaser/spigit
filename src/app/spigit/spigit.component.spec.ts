import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpigitComponent } from './spigit.component';

describe('SpigitComponent', () => {
  let component: SpigitComponent;
  let fixture: ComponentFixture<SpigitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpigitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
