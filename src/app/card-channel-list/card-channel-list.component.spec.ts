import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChannelListComponent } from './card-channel-list.component';

describe('CardChannelListComponent', () => {
  let component: CardChannelListComponent;
  let fixture: ComponentFixture<CardChannelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardChannelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardChannelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
