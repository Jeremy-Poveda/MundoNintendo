import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { DataProviderService } from '../../providers/data-provider.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLinkActive, RouterLink ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  searchTerm: string = '';
  searchResults: any[] = [];
  searchType: string = 'figura';
  constructor(private dataProviderService: DataProviderService) {}

  performSearch(searchTerm: string): void {
    this.dataProviderService.getProductsByNameAndType(searchTerm, this.searchType)
      .subscribe((response: any) => {
        this.searchResults = response;
          console.log("uwu");
      }, error => {
        console.error('Error al realizar la busqueda:', error);
      });
  }
}
