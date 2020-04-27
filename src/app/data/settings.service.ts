import { Injectable } from '@angular/core';
import { MultiText } from './api-data';

export type Language = 'english'|'chinese';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  _language: Language;

  tr(text: MultiText): string {
    if (!text) {
      return '';
    }
    if (typeof(text) === 'string') {
      return text;
    }
    switch (this.language) {
      case 'chinese':
        return text.chinese || text.english;
      default:
        return text.english || text.chinese;
    }
  }

  constructor() {
    this._language = localStorage.getItem('language') as Language;
    if (!this._language) {
      this._language = 'english';
    }
  }

  get language(): Language {
    return this._language;
  }

  set language(value: Language) {
    this._language = value;
    this.save();
  }

  save() {
    localStorage.setItem('language', this._language);
  }

  toggleLanguage() {
    if (this.language === 'chinese') {
      this.language = 'english';
    } else {
      this.language = 'chinese';
    }
  }
}
