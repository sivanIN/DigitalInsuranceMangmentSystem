import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepremiumcalculatorComponent } from './homepremiumcalculator.component';

describe('HomepremiumcalculatorComponent', () => {
  let component: HomepremiumcalculatorComponent;
  let fixture: ComponentFixture<HomepremiumcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepremiumcalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepremiumcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
