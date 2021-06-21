import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvasionComponent } from './evasion.component';

describe('EvasionComponent', () => {
  let component: EvasionComponent;
  let fixture: ComponentFixture<EvasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvasionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
