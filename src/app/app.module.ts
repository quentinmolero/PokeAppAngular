import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokemonComponent} from './components/pokemon/pokemon.component';
import {BattleComponent} from './components/battle/battle.component';
import {LogComponent} from './components/log/log.component';
import {PokemonNameColorDirective} from './directives/pokemonNameColor/pokemon-name-color.directive';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ListPokemonComponent} from './components/list-pokemon/list-pokemon.component';
import {LoaderInterceptorsService} from './services/interceptors/loader-interceptors.service';
import {LoaderComponent} from './components/loader/loader.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {SelectPokemonComponent} from './components/select-pokemon/select-pokemon.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomComponent } from './components/custom/custom.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    LogComponent,
    PokemonNameColorDirective,
    ListPokemonComponent,
    LoaderComponent,
    SelectPokemonComponent,
    HeaderComponent,
    CustomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorsService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
