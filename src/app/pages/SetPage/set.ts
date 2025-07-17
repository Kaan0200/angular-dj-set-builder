import { Component, inject, input, signal } from '@angular/core';
import { TrackSet } from '../../models/TrackSet';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
    selector: 'set-page',
    templateUrl: './set.html',
    styleUrl: './set.scss'
  })
  export class SetPage {
    // inject services
    private activeRoute = inject(ActivatedRoute);
    private localStorageService = inject(LocalStorageService);


    currentTrackSetId = signal('');

    currentTrackSet: TrackSet | null;

    constructor() {
      console.log(this.activeRoute);
      this.activeRoute.params.subscribe((params) => {
        this.currentTrackSetId.set(params['setId']);
      })
      this.currentTrackSet = this.localStorageService.getSet(this.currentTrackSetId());
    }
  }
  