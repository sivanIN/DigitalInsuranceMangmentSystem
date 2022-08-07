import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepolicydetailsComponent } from './homepolicydetails.component';

describe('HomepolicydetailsComponent', () => {
  let component: HomepolicydetailsComponent;
  let fixture: ComponentFixture<HomepolicydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepolicydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepolicydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
