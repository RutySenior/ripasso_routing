import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studente',
  imports: [CommonModule, Studente, RouterLink],
  templateUrl: './studente.html',
  styleUrls: ['./studente.css']
})
export class Studente {
  @Input() nome!: string;
  @Input() classe!: string;
  @Input() mediaVoti!: number;
  @Input() studente!: any;

  mostraMedia = false;

   toggleMedia() {
    this.mostraMedia = !this.mostraMedia;
  }
}