import { Injectable } from '@angular/core';
import { TrackSet } from '../models/TrackSet';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

    /**
     * Saves a Trackset into LocalStorage with the UUID as the key
     * @param Id UUID of the key to save the TrackSet as
     * @param value The TrackSet to save
     * @returns A promise once the TrackSet is saved
     */
    saveSet(Id: string, value: TrackSet): Promise<void> {
        return new Promise<void>((): void => {
        try {
            const jsonValue = JSON.stringify(value);
            localStorage.setItem(Id, jsonValue);
            return;
        } catch (error: unknown) {
            console.error('Error saving to local storage', error);
        }
        })
    }

    /**
     * Retrieves a TrackSet based off it's UUID
     * @param Id UUID of the LocalStorage TrackSet
     * @returns A TrackSet or null if there wasn't anything found.
     */
    getSet(Id: string): TrackSet | null {
        try {
            const value = localStorage.getItem(Id);
            return value ? JSON.parse(value) : null;
        
        } catch (error: unknown) {
            console.log('Error reading from local storage')
            return null;
        }
    }

    /**
     * Gets all TrackSets in LocalStorage
     */
    getAll(): TrackSet[] {
        try {
            //localStorage.getItem
        } catch {

        }
        return [];
    }

    /**
     * Function that deletes a LocalStorage Trackset
     * @param Id UUID of stored TrackSet
     */
    removeSet(Id: string): void {
        localStorage.removeItem(Id);
    }

    /** 
     * Clears out LocalStorage 
     */
    clear(): void {
        localStorage.clear();
    }
}
