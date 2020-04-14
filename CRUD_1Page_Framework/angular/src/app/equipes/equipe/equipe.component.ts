import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/shared/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  constructor( public service : EquipeService ) { }

  ngOnInit(): void {
  }

}
