import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-modal',
  template: `
    <button mat-button (click)="openDialog()">Open dialog</button>
  `,
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalDialogComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'app-modal-dialog',
  template: `
    <h1 mat-dialog-title>Favorite Animal</h1>
    <div mat-dialog-content>
      <p>Your favorite animal is: {{ data.animal }}</p>
    </div>
  `,
})
export class ModalDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
