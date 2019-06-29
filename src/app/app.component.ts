import { Component, OnInit, DoCheck} from '@angular/core';
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

export class AppComponent implements OnInit, DoCheck {
    name: string = 'Preston Nalls';
    language: string = 'en';
    
    constructor(private languageService: LanguageService) {}

    ngOnInit() {
        this.language = 'en';
    }

    // Change language settings to Japanese
    changeLanguageToJp() {
        this.language = 'jp';
        this.name = 'プレストン・ノールズ';
    }

    // Change language settings to English
    changeLanguageToEn() {
        this.language = 'en';
        this.name = 'Preston Nalls';
    }

    ngDoCheck() {
        this.languageService.setLanguage(this.language);
    }
}
