import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticestateComponent } from './practicestate.component';

describe('PracticestateComponent', () => {
  let component: PracticestateComponent;
  let fixture: ComponentFixture<PracticestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticestateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
