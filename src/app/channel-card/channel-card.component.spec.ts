import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelCardComponent } from './channel-card.component';

describe('CardChannelListComponent', () => {
  let component: ChannelCardComponent;
  let fixture: ComponentFixture<ChannelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
