import { MusicTrack } from './MusicTrack';

/** Interface Object representing a DJ Set of Tracks */
export class TrackSet {
  /** Title of the Set */
  Name: string;
  /** UUID */
  Id: string;

  /** List of Tracks */
  Tracks: Array<MusicTrack> = [];

  /** Fixed flag used to identify LocalStorage objects that are Sets */
  readonly Flag = 'dj-flag' as const;

  constructor(name: string) {
    this.Name = name;
    this.Id = crypto.randomUUID();
  }
}
