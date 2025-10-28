import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Studente } from '../studente/studente';
import { StudentiService } from '../studenti-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  imports: [CommonModule, Studente, RouterLink],
  templateUrl: './pagina3.html',
  styleUrls: ['./pagina3.css']
})
export class Pagina3 {

  constructor(private studentiService: StudentiService) {}

  get studenti() {
    return this.studentiService.getStudenti();
  }

  rimuoviStudente(id: number) {
    this.studentiService.rimuoviStudente(id);
  }
}