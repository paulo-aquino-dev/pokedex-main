import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokemonDetailsComponent } from './modal-pokemon-details.component';

describe('ModalPokemonDetailsComponent', () => {
  let component: ModalPokemonDetailsComponent;
  let fixture: ComponentFixture<ModalPokemonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPokemonDetailsComponent]
    });
    fixture = TestBed.createComponent(ModalPokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
