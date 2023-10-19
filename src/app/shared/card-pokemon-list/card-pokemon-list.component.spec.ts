import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokemonListComponent } from './card-pokemon-list.component';

describe('CardPokemonListComponent', () => {
  let component: CardPokemonListComponent;
  let fixture: ComponentFixture<CardPokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPokemonListComponent]
    });
    fixture = TestBed.createComponent(CardPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
