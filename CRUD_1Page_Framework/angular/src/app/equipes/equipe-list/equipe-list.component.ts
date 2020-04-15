import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/shared/equipe.service';
import { Equipe } from 'src/app/shared/equipe.model';

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {

  constructor(public service : EquipeService) { }

  ngOnInit(): void {
    this.service.refreshListe();
  }

  // populateForm(equipe: Equipe) {
  //   this.service.formData = Object.assign({}, equipe);
  // }

  

}
