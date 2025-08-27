import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormField, MatInput } from '@angular/material/input';

@Component({
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    MatFormField,
    MatDialogActions,
    MatButton,
    MatExpansionModule,
    MatInput,
  ],
  selector: 'configure-set-dialog',
  styles: ``,
  template: `
    <h3 mat-dialog-title>Configure DJ Set</h3>
    <mat-dialog-content>
      <mat-form-field>
        <input matInput label="Rename Set" placeHolder="Change Set Name" />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton (click)="SaveSettings()">Save</button>
      <button matButton mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
})
export class ConfigureSetDialog {
  // settings values
  public NewTitle: string = '';

  public SaveSettings(): void {}
}
