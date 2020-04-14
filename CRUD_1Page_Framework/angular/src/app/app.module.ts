import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EquipesComponent } from './equipes/equipes.component';
import { EquipeComponent } from './equipes/equipe/equipe.component';
import { EquipeListComponent } from './equipes/equipe-list/equipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipesComponent,
    EquipeComponent,
    EquipeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
