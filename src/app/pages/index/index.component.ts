import { Component } from '@angular/core';
import { DataProviderService } from '../../providers/data-provider.service'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgxPaginationModule } from "ngx-pagination";
import { Producto } from '../../interfaces/producto';
import { Noticia } from '../../interfaces/noticia';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HttpClientModule, CommonModule, NgxPaginationModule,RouterLinkActive, RouterLink],
  providers: [DataProviderService],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  public bestSellers: Producto[] = [];
  public newProducts: Producto[] = [];
  public notice: Noticia[] = [
    {
        id: 1,
        autor: "John Doe",
        urlImagen: "https://cl.buscafs.com/www.levelup.com/public/uploads/images/832950/832950.png",
        descripcion: "Fue un día como hoy pero de 1999 cuando la industria de los videojuegos conoció un curioso juego de peleas que combinó todas las sagas de Nintendo en una sola propuesta: Super Smash Bros.",
        fechaPublicacion: new Date("2024-01-20T12:30:00Z"),
        titulo: "¡Feliz cumpleaños! Super Smash Bros. celebra sus 25 años de existencia",
    },
    {
        id: 2,
        autor: "Dan Villalobos",
        urlImagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_6/nswitch_anothercoderecollection/NSwitch_AnotherCodeRecollection_03.jpg",
        descripcion: "Nos llegan buenas noticias para todos los que estaban esperando el regreso de Ashley en Another Code: Recollection, ya que el juego de Nintendo está disponible por fin y listo para ofrecerte una experiencia que seguramente te encantará.",
        fechaPublicacion: new Date("2024-01-19T15:45:00Z"),
        titulo: "Another Code: Recollection ya está disponible",
    },
    {
        id: 3,
        autor: "Ulises Contreras",
        urlImagen: "https://assetsio.reedpopcdn.com/ss_8ef8a16df5e357df5341efdb814192835814107f.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
        descripcion: "Si algo demostraron juegos como Lethal Company, BattleBit Remastered y Among Us, es que a veces sólo se necesita un concepto interesante para triunfar en esta industria cada vez más competitiva.",
        fechaPublicacion: new Date("2024-01-19T09:00:00Z"),
        titulo: "Palworld, el Pokémon con pistolas, es un éxito de ventas",
    },
    {
      id: 4,
      autor: "Victor Rosas",
      urlImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWREwqcF57OOJxkQ3MddFdfHZmprc8nsyMQ&usqp=CAU",
      descripcion: "4 años tuvieron que pasar para que Cyberpunk 2077 lograra la redención después de su desastroso lanzamiento.",
      fechaPublicacion: new Date("2024-01-19T09:00:00Z"),
      titulo: "Gratis: Cyberpunk 2077 tiene una sorpresa",
  },
 
];

  constructor(private dataProvider: DataProviderService) {

  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataProvider.getAllProducts().subscribe((response) => {
      if (Array.isArray(response)) {
        let dataArray = response as Producto[];
          this.bestSellers = dataArray.slice().sort((a, b) => a.cantidad - b.cantidad).slice(0, 4);
          this.newProducts = dataArray.slice().sort((a, b) => {
                const fechaA = new Date(a.fecha_ingreso).getTime();
                const fechaB = new Date(b.fecha_ingreso).getTime();
                return fechaB - fechaA;
            }).slice(0, 4);
  
        console.log(this.newProducts, this.bestSellers);
      } else {
        this.bestSellers = [];
        this.newProducts = [];
        console.error('La respuesta no es un array:', response);
      }
    });
  }
}
