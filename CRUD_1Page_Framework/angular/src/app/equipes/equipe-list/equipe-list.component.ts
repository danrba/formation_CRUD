import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/shared/equipe.service';
import { Equipe } from 'src/app/shared/equipe.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent implements OnInit {

  constructor(public service : EquipeService,
    private tostrs: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshListe();
  }

  populateForm(equipe : Equipe){
    this.service.formData = Object.assign({}, equipe);
    // this.service.formData = equipe;

  }

  onDelete(equipeId: number){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteEquipe(equipeId).subscribe(res =>{
        this.service.refreshListe();
        this.tostrs.success('Deleted successfully','Equipe Register');
    });
    }

  }

}
