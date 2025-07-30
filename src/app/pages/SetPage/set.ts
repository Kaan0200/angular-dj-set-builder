import { ChangeDetectionStrategy, Component, inject, input, signal, SimpleChanges } from '@angular/core';
import { TrackSet } from '../../models/TrackSet';
import { MusicTrack, MusicKeys as AvailableKeys } from '../../models/MusicTrack';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { LocalSaveStatus, SaveStatus } from "../../components/LocalSaveStatus";

@Component({
    imports: [
    FormsModule, MatIconModule, MatFabButton, MatFormField,
    MatInput, MatSelect, MatOption, MatSlideToggle,
    LocalSaveStatus, ReactiveFormsModule
],
    selector: 'set-page',
    templateUrl: './set.html',
    changeDetection: ChangeDetectionStrategy.Default,
    styleUrl: './set.scss'
  })
  export class SetPage {

    // Moving import into class so Angular Template can access const
    public readonly MusicKeys = AvailableKeys;
    public readonly SaveStatus = SaveStatus;

    // inject services
    private activeRoute = inject(ActivatedRoute);
    private localStorageService = inject(LocalStorageService);


    currentTrackSetId = signal('');

    currentTrackSet = signal(new TrackSet('default'));
    currentStatus = signal(SaveStatus.clean);

    constructor() {
      console.log(this.activeRoute);
      this.activeRoute.params.subscribe((params) => {
        this.currentTrackSetId.set(params['setId']);
      })
      this.currentTrackSet.set(this.localStorageService.getSet(this.currentTrackSetId()) ?? new TrackSet('New Set'));
    }

    AddSong() {
      this.currentTrackSet().Tracks.push({
        Artist: '',
        Title: '',
        Label: '',
        BMP: '',
        MusicKey: undefined,
        Aquired: false
      } as MusicTrack);
    }

    onBlur(): void {
      console.log(this.currentTrackSet);
      this.currentStatus.set(SaveStatus.saving);
      this.localStorageService.saveSet(this.currentTrackSetId(), this.currentTrackSet()).then(() =>{
        this.currentStatus.set(SaveStatus.clean);
      });
    }
    onChange(): void {
      this.currentStatus.set(SaveStatus.dirty);
    }
  }
  