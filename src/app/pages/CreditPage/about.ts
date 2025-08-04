import { Component, inject } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  imports: [MatIcon, MatFabButton],
  selector: 'set-page',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutPage {
  private localStorageService = inject(LocalStorageService);

  public ClearLocalStorage(): void {
    this.localStorageService.clear();
  }
}
