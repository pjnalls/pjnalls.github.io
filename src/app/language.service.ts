import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class LanguageService {
    // Observable string source
    private languageSettingSource = new Subject<string>();

    // Observable string stream
    languageSetting$ = this.languageSettingSource.asObservable();

    // Service message commands
    setLanguage(language: string) {
        this.languageSettingSource.next(language);
    }
}