import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicydetailsforadminComponent } from './policydetailsforadmin.component';

describe('PolicydetailsforadminComponent', () => {
  let component: PolicydetailsforadminComponent;
  let fixture: ComponentFixture<PolicydetailsforadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicydetailsforadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicydetailsforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
