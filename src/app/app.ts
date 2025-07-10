import { Component, signal } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SetNavigation } from "./components/SetNavigation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, SetNavigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('angular-dj-set-builder');

  public SetLists: Array<TrackSet> = [
    {
      Name: "one"
    },
    {
      Name: "second"
    },
    {
      Name: "third"
    }
  ]

  public createSet(): void {
    this.SetLists.push({Name: "new Item"})
  }
}

/** Interface Object representing a DJ Set of Tracks */
export interface TrackSet {
  Name: string;
}
