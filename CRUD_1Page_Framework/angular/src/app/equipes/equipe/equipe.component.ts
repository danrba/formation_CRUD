import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/shared/equipe.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  constructor( public service : EquipeService,
    private tostrs : ToastrService ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      EquipeId: null,
      Nom:'',
      Ville:'',
      Sport:''
    }

  }

  onSubmit(form : NgForm) {
    if(form.value.EquipeId == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postEquipe(form.value).subscribe(res =>{
      this.tostrs.success('Inserted successfully','Equipe Register');
      this.resetForm(form);
      this.service.refreshListe();
    });
  }

  updateRecord(form: NgForm){
    this.service.putEquipe(form.value).subscribe(res =>{
      this.tostrs.info('Updated successfully','Equipe Register');
      this.resetForm(form);
      this.service.refreshListe();
    });
    
  }

  
}
