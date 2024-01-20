import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';


export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'videojuegos', component: VideojuegosComponent },
    { path: '**', redirectTo: '' }
];