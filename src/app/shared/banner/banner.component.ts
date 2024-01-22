import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLinkActive, RouterLink ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
