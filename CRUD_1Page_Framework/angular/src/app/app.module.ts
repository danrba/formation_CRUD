import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { EquipesComponent } from './equipes/equipes.component';
import { EquipeComponent } from './equipes/equipe/equipe.component';
import { EquipeListComponent } from './equipes/equipe-list/equipe-list.component';
import { EquipeService } from './shared/equipe.service';

@NgModule({
  declarations: [
    AppComponent,
    EquipesComponent,
    EquipeComponent,
    EquipeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EquipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
