import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) { }

  public success(message: string) {
    this.display(message);
  }

  private display(message: string, duration = 2000) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

}