export interface MusicTrack {
    Title: string;
    Artist: string;
    Label?: string;

    // Values for advanced usage
    MusicKey?: string;
    BPM?: string;

    //
    Aquired?: boolean;
}