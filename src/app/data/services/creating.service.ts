import { Injectable } from '@angular/core';
import { Salt } from './salt.service';

@Injectable({
  providedIn: 'root'
})
export class Creating {
  cellGroup = new Salt.CellGroup();

  constructor() {}

  newCellGroup() {
    delete this.cellGroup.address;
    delete this.cellGroup.capacity;
    delete this.cellGroup.latitude;
    delete this.cellGroup.longitude;
    delete this.cellGroup.name;
    delete this.cellGroup.missionStatement;
    delete this.cellGroup.photoIds;
  }
}
