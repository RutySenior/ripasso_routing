import { Routes } from '@angular/router';
//importiamo i componenti
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
export const routes: Routes = [
//se l’URL è vuoto, vai su /pagina1
{ path: '', redirectTo: 'pagina1', pathMatch: 'full' },
//se l'URL è /pagina1 mostra il componente Pagina1
{ path: 'pagina1', component: Pagina1 },
{ path: 'pagina2', component: Pagina2 },
//SINTASSI
//{ path: 'url', component: Componente},
];