import { MusicTrack } from './MusicTrack';
import { SetMetadata } from './SetMetadata';

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

  /** Object that houses all the metadata around when the set was created and saved */
  ChangeInformation: SetMetadata | undefined;

  constructor(name: string) {
    this.Name = name;
    this.Id = crypto.randomUUID();
    this.ChangeInformation = undefined;
  }
}
