import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddevasionComponent } from './addevasion.component';

describe('AddevasionComponent', () => {
  let component: AddevasionComponent;
  let fixture: ComponentFixture<AddevasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddevasionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddevasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
