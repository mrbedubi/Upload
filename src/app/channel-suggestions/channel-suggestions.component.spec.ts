import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSuggestionsComponent } from './channel-suggestions.component';

describe('ChannelSuggestionsComponent', () => {
  let component: ChannelSuggestionsComponent;
  let fixture: ComponentFixture<ChannelSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
