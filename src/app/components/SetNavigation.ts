import { Component, input, output, signal } from '@angular/core';
import { MatListItem, MatNavList } from "@angular/material/list";
import { TrackSet } from '../models/TrackSet';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'set-navigation',
    imports: [RouterLink, MatListItem, MatNavList],
    styles: `
      a {
      text-decoration: none;
      color: greenyellow;
    }`,
    template: `
        <mat-nav-list>
          <ul>
            <mat-list-item>
              <a routerLink="">Home</a>
            </mat-list-item>
            @for (link of Sets(); track link) {
              <mat-list-item>
                <a (click)="SwapTo(link.Id)">{{ link.Name }}</a>
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
    swapTo = output<string>();
    
    public SwapTo(targetId: string) {
      this.swapTo.emit(targetId);
    }

    public NewSet() {
        this.newSet.emit();
    }
}