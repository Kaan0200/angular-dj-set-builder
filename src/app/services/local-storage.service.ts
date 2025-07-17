import { Injectable } from '@angular/core';
import { TrackSet } from '../models/TrackSet';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

    saveSet(Id: string, value: TrackSet) {
        try {
            const jsonValue = JSON.stringify(value);
            localStorage.setItem(Id, jsonValue);
        } catch (error: unknown) {
            console.error('Error saving to local storage', error);
        }
    }

    getSet(Id: string): TrackSet | null {
        try {
            const value = localStorage.getItem(Id);
            return value ? JSON.parse(value) : null;
        
        } catch (error: unknown) {
            console.log('Error reading from local storage')
            return null;
        }
    }

    removeSet(Id: string): void {
        localStorage.removeItem(Id);
    }

    /** Clears out Local Storage */
    clear(): void {
        localStorage.clear();
    }
}
