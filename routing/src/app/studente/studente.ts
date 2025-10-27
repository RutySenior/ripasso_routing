import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.html',
  styleUrls: ['./studente.css']
})
export class Studente {
  @Input() nome!: string;
  @Input() classe!: string;
  @Input() mediaVoti!: number;

  mostraMedia = false;

   toggleMedia() {
    this.mostraMedia = !this.mostraMedia;
  }
}