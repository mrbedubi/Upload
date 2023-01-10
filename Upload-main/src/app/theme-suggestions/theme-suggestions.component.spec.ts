import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSuggestionsComponent } from './theme-suggestions.component';

describe('ThemeSuggestionsComponent', () => {
  let component: ThemeSuggestionsComponent;
  let fixture: ComponentFixture<ThemeSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
