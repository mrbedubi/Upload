import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPopUpComponent } from './report-pop-up.component';

describe('ReportPopUpComponent', () => {
  let component: ReportPopUpComponent;
  let fixture: ComponentFixture<ReportPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
