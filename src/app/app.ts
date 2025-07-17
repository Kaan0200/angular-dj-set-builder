import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SetNavigation } from "./components/SetNavigation";
import { TrackSet } from './models/TrackSet';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, SetNavigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('angular-dj-set-builder');
  private localStorageService = new LocalStorageService();

  constructor() {
    // no data in the app, create a demo Set
    if (localStorage.length == 0) {
      this.createSet('Demo Set');
    }
  }

  public SetLists: Array<TrackSet> = [];

  public createSet(name?: string): void {
    let newSet = new TrackSet(name ?? "New Set List");
    this.localStorageService.saveSet(newSet.Id, newSet);
    this.SetLists.push(newSet);
  }
}
