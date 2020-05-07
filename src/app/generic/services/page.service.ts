import { Injectable } from '@angular/core';
import { WPage, PageId } from './types';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getPage(id: PageId) : WPage {
    return null;
  }
}
