import { Injectable } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { Observable } from "rxjs";
import { DeleteDialogComponent } from "../components";

@Injectable({ providedIn: 'root' })
export class DialogService {
    constructor(public dialog: MatDialog) { }

    openDeleteDialog(): Observable<boolean> {
        return this.dialog.open(DeleteDialogComponent).afterClosed();
    }

}