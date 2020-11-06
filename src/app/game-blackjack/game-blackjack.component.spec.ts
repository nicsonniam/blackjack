import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBlackjackComponent } from './game-blackjack.component';

describe('GameBlackjackComponent', () => {
  let component: GameBlackjackComponent;
  let fixture: ComponentFixture<GameBlackjackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameBlackjackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBlackjackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
