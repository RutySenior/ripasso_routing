import { Component } from '@angular/core';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pagina3 } from './pagina3/pagina3';
import { Studente } from './studente/studente';
@Component({
selector: 'app-root',
imports: [Pagina1,Pagina2,RouterOutlet,RouterLink, Pagina3, Studente],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
}