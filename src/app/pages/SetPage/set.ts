import { ChangeDetectionStrategy, Component, inject, input, signal, SimpleChanges } from '@angular/core';
import { TrackSet } from '../../models/TrackSet';
import { MusicTrack, MusicKeys } from '../../models/MusicTrack';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';

@Component({
    imports: [FormsModule, MatIconModule, MatFabButton, MatFormField, MatInput,MatSelect, MatOption, MatSlideToggle],
    selector: 'set-page',
    templateUrl: './set.html',
    changeDetection: ChangeDetectionStrategy.Default,
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
        MusicKey: undefined,
        Aquired: false
      } as MusicTrack);
    }

    ngOnChanges(changes: SimpleChanges) {
      console.log("!!CHANGES!!");
      console.log(changes);
    }
  }
  