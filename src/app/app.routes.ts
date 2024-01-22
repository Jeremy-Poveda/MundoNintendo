import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';


export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'videojuegos', component: VideojuegosComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: '**', redirectTo: '' }
];