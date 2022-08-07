import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstatusformComponent } from './adminstatusform.component';

describe('AdminstatusformComponent', () => {
  let component: AdminstatusformComponent;
  let fixture: ComponentFixture<AdminstatusformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstatusformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminstatusformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
