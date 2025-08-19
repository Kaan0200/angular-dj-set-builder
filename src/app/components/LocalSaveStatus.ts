import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'local-save-status',
  imports: [MatIcon],
  styles: `
    .status {
      padding-top: 0.5rem;
      padding-right: 1rem;
      padding-left: 1rem;
      color: grey;
    }
  `,
  template: ` <mat-icon class="status">{{ StatusIcon() }}</mat-icon> `,
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
