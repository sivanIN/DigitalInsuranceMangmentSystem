import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPolicyFormComponent } from './health-policy-form.component';

describe('HealthPolicyFormComponent', () => {
  let component: HealthPolicyFormComponent;
  let fixture: ComponentFixture<HealthPolicyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthPolicyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthPolicyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
