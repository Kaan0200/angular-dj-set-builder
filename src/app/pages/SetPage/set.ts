import { Component, inject, input, signal } from '@angular/core';
import { TrackSet } from '../../models/TrackSet';
import { MusicTrack } from '../../models/MusicTrack';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


@Component({
    imports: [FormsModule, MatIconModule, MatFabButton, MatFormField, MatInput, MatSlideToggle],
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
      this.currentTrackSet.Tracks.push({
        Artist: '',
        Title: '',
        Label: '',
        BMP: '',
        MusicKey: '',
        Aquired: false
      } as MusicTrack);
    }
  }
  