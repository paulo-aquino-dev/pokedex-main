import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http'
import { NgFor, AsyncPipe } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
import { ContainerComponent } from './shared/container/container.component'
import { HomeComponent } from './pages/home/home.component'
import { CardPokemonComponent } from './shared/card-pokemon/card-pokemon.component'
import { CardPokemonListComponent } from './shared/card-pokemon-list/card-pokemon-list.component'
import { PokeDataService } from './services/poke-data.service'
import { FormBuscaComponent } from './shared/form-busca/form-busca.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    HomeComponent,
    CardPokemonComponent,
    CardPokemonListComponent,
    FormBuscaComponent
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
