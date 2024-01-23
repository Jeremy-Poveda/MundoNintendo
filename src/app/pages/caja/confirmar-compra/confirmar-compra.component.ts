import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { DataProviderService } from '../../../providers/data-provider.service';

@Component({
  selector: 'app-confirmar-compra',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './confirmar-compra.component.html',
  styleUrl: './confirmar-compra.component.css',
})
export class ConfirmarCompraComponent {

    //simula el id del usuario logeado
    public userID: number = 1;

  constructor(private _snackBar: MatSnackBar,private dataProvider: DataProviderService) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['custom-snackbar'],
    });
  }
  makePurchase() {
    this.openSnackBar('Su compra fue realizada exitosamennte', 'cerrar');
    this.dataProvider.clearCart(this.userID).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
