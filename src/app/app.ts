import { Component, signal } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatNavList, MatListItem],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('angular-dj-set-builder');

  public Sets: Array<{Name: string}> = [
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

  public NewSet(): void {
    this.Sets.push({Name: "new Item"})
  }
}
