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
    language: string = 'en';
    
    constructor(private languageService: LanguageService) {
        this.languageService.setLanguage(this.language)
    }
    

    // Change language settings to Japanese
    changeLanguageToJp() {
        this.language = 'jp';
        this.languageService.setLanguage(this.language)
    }

    // Change language settings to English
    changeLanguageToEn() {
        this.language = 'en';
        this.languageService.setLanguage(this.language);
    }
}
