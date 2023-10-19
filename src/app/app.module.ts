import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardPokemonComponent } from './shared/card-pokemon/card-pokemon.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CardPokemonListComponent } from './shared/card-pokemon-list/card-pokemon-list.component';
import { PokeDataService } from './services/poke-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, AsyncPipe } from '@angular/common';
import { FormBuscaComponent } from './shared/form-busca/form-busca.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalPokemonDetailsComponent } from './shared/modal-pokemon-details/modal-pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ContainerComponent,
    HomeComponent,
    CardPokemonComponent,
    CardPokemonListComponent,
    FormBuscaComponent,
    ModalPokemonDetailsComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    MatSlideToggleModule,
    AsyncPipe,
    MatIconModule
  ],
  providers: [PokeDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}