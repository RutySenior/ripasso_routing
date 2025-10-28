import { Component } from '@angular/core';
import { StudentiService } from '../studenti-service';
interface Studente {
  id: number;
  nome: string;
  classe: string;
  mediaVoti: number;
}

@Component({
  selector: 'app-pagina2',
  imports: [],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 {

  constructor(private studentiService: StudentiService) {}

  aggiungiStudente(nomeInput: HTMLInputElement, classeInput: HTMLInputElement, mediaInput: HTMLInputElement) {
    const nome = nomeInput.value.trim();
    const classe = classeInput.value.trim();
    const mediaVoti = Number(mediaInput.value);

    if (!nome || !classe || isNaN(mediaVoti)) {
      alert('Compila tutti i campi correttamente');
      return;
    }

    this.studentiService.aggiungiStudente(nome, classe, mediaVoti);

    // pulisci i campi
    nomeInput.value = '';
    classeInput.value = '';
    mediaInput.value = '';
  }

}