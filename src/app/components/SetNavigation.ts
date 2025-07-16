import { Component, input, output, signal } from '@angular/core';
import { MatListItem, MatNavList } from "@angular/material/list";
import { TrackSet } from '../app';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'set-navigation',
    imports: [RouterLink, SetNavigation, MatListItem, MatNavList],
    styles: `
      :host {
      text-decoration: none;
      color: greenyellow;
    }
    `,
    template: `
        <mat-nav-list>
          <ul>
            <mat-list-item>
              <a routerLink="">Home</a>
            </mat-list-item>
            @for (link of Sets(); track link) {
              <mat-list-item>
                <a routerLink="">{{ link.Name }}</a>
              </mat-list-item>
            }
            <mat-list-item (click)="NewSet()">
              + New Set
            </mat-list-item>
          </ul>
        </mat-nav-list>
    `
})
export class SetNavigation {

    Sets = input.required<Array<TrackSet>>();
    newSet = output<void>();

    public NewSet() {
        this.newSet.emit();
    }
}