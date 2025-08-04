import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SetNavigation } from './components/SetNavigation';
import { TrackSet } from './models/TrackSet';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, SetNavigation],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

/**
 * General Application component, wraps the router, and contains any initial data loading
 */
export class App {
  /* Application Title */
  protected readonly title = signal('angular-dj-set-builder');
  /* Local Storage Access Service */
  private localStorageService = new LocalStorageService();
  /* List of Sets in Application */
  public SetLists: Array<TrackSet> = [];
  /** Router Service Injection */
  private router: Router = inject(Router);

  constructor() {
    // no data in the app, create a demo Set
    if (localStorage.length == 0) {
      this.createSet('Demo Set');
    }

    this.SetLists = this.localStorageService.getAll();

    console.log(this.SetLists);
    // get the saved values out and update the entire app with the saved local storage
  }

  /**
   * Function that creates a new TrackSet and pushes it into LocalStorage
   * @param name String to name the set with
   */
  public createSet(name?: string): void {
    let newSet = new TrackSet(name ?? 'New Set List');
    this.localStorageService.saveSet(newSet.Id, newSet);
    this.SetLists.push(newSet);
  }

  public swapToSet(target: string): void {
    this.router.navigate(['/', target]);
  }
}
