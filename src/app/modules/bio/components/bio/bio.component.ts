import { Component } from '@angular/core';
import { LanguageService } from '../../../../language.service';

@Component({
    selector: 'bio-page',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.scss']
})

export class BioComponent {
    language: string = 'en';
    constructor(languageService: LanguageService) {
        languageService.languageSetting$.subscribe(
           language => {
               this.language = language
        });
    }
}