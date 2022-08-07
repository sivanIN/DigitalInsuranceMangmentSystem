import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepolicyFormComponent } from './homepolicy-form.component';

describe('HomepolicyFormComponent', () => {
  let component: HomepolicyFormComponent;
  let fixture: ComponentFixture<HomepolicyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepolicyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepolicyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
