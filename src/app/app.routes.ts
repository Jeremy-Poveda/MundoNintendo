import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CajaComponent } from './pages/caja/caja.component';
import { DatosPersonalesComponent } from './pages/caja/datos-personales/datos-personales.component';
import { MetodoPagoComponent } from './pages/caja/metodo-pago/metodo-pago.component';
import { ConfirmarCompraComponent } from './pages/caja/confirmar-compra/confirmar-compra.component';



export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'videojuegos', component: VideojuegosComponent },
    { path: 'carrito', component: CarritoComponent },
    {
        path: 'caja',
        component: CajaComponent,
        children: [
            { path: '', component: DatosPersonalesComponent },
          { path: 'datos-personales', component: DatosPersonalesComponent },  
          { path: 'metodo-pago', component: MetodoPagoComponent },      
          { path: 'confirmar-compra', component: ConfirmarCompraComponent },      

        ]
      },
      { path: '**', redirectTo: '' },

];