import { Injectable } from '@angular/core';
import { Equipe } from './equipe.model';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  formData : Equipe;
  constructor() { }
}
