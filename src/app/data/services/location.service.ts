import { Injectable } from '@angular/core';

export class Coordinate {
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  currentLocation: Coordinate = {
    latitude: -43.549917,
    longitude: 172.562886
  };

  private intervalId = null;

  relocate(callback: (newLocation: Coordinate) => any = null, interval = 0) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation.latitude = position.coords.latitude;
        this.currentLocation.longitude = position.coords.longitude;
        if (callback) {
          callback(this.currentLocation);
        }
      });
    }
    if (interval !== 0) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => this.relocate(callback), interval);
    }
  }

  stopUpdaing() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
