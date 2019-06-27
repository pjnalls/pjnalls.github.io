import { Component } from '@angular/core';
import { LanguageService } from '../../../../language.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'bio-page',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.scss']
})

export class BioComponent {
    language: string = '';
    subscription: Subscription;

    constructor(languageService: LanguageService) {
        this.subscription = languageService.languageSetting$
            .subscribe(lang => this.language = lang);
    }
}