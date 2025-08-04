import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'local-save-status',
  imports: [MatIcon],
  styles: ``,
  template: ` <mat-icon>{{ StatusIcon() }}</mat-icon> `,
})
export class LocalSaveStatus {
  Status = input.required<SaveStatus>();

  StatusIcon() {
    switch (this.Status()) {
      case SaveStatus.clean:
        return 'check';
      case SaveStatus.dirty:
        return 'rotate_left';
      case SaveStatus.saving:
        return 'loop';
      default:
        return 'running_with_errors';
    }
  }
}

export enum SaveStatus {
  'clean',
  'dirty',
  'saving',
}
