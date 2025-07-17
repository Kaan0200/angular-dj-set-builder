import { MusicTrack } from "./MusicTrack";

/** Interface Object representing a DJ Set of Tracks */
export class TrackSet {
  /** Title of the Set */
  Name: string;
  /** UUID */
  Id: string;

  /** List of Tracks */
  Tracks: Array<MusicTrack> = [];

  constructor(name: string) {
    this.Name = name;
    this.Id = crypto.randomUUID();
  }
}
