import { Component } from '@angular/core';
import { routerTransition } from './animations';
import { LanguageService } from './language.service';

@Component({
    selector: 'app-root',
    providers: [LanguageService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        routerTransition()
    ]
})

export class AppComponent {
    name: string = 'Preston Nalls';

    
    constructor(private languageService: LanguageService) {}
    language: string = 'en';
    
    ngOnInit(): void {
        this.languageService.languageSetting$
            .subscribe(
                language => {
                    this.languageService.setLanguage(language);
                }
            );
    }

    // Change language settings to Japanese
    changeLanguageToJp() {
        this.language = 'jp';
        this.languageService.languageSetting$
            .subscribe(
                language => {
                    this.languageService.setLanguage(language);
                }
            );
    }

    // Change language settings to English
    changeLanguageToEn() {
        this.language = 'en'
        this.languageService.languageSetting$
            .subscribe(
                language => {
                    this.languageService.setLanguage(language);
                }
            );
    }
}
