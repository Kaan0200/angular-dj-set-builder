import { Component, inject, input, signal } from '@angular/core';
import { TrackSet } from '../../models/TrackSet';
import { MusicTrack } from '../../models/MusicTrack';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';


@Component({
    imports: [MatIconModule, MatFabButton, MatFormField, MatInput, MatLabel, MatSlideToggle],
    selector: 'set-page',
    templateUrl: './set.html',
    styleUrl: './set.scss'
  })
  export class SetPage {
    // inject services
    private activeRoute = inject(ActivatedRoute);
    private localStorageService = inject(LocalStorageService);


    currentTrackSetId = signal('');

    currentTrackSet: TrackSet;

    constructor() {
      console.log(this.activeRoute);
      this.activeRoute.params.subscribe((params) => {
        this.currentTrackSetId.set(params['setId']);
      })
      this.currentTrackSet = this.localStorageService.getSet(this.currentTrackSetId()) ?? new TrackSet('New Set');
    }

    AddSong() {
      this.currentTrackSet.Tracks.push({} as MusicTrack);
    }
  }
  