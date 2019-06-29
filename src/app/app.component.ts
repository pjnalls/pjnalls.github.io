import { Component, OnInit, DoCheck} from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    language: string;
    
    constructor(private languageService: LanguageService,
                private titleService: Title) {}

    ngOnInit() {
        sessionStorage.getItem('language') === null ? 
            this.language = 'en' :
            this.language = sessionStorage.getItem('language');
        
        if (this.language === 'en') {
            this.name = 'Preston Nalls';
            this.titleService.setTitle(this.name);
        } else {
            this.name = 'プレストン・ノールズ';
            this.titleService.setTitle(this.name);
        }

    }

    // Change language settings to Japanese
    changeLanguageToJp() {
        this.language = 'jp';
        this.name = 'プレストン・ノールズ';
        sessionStorage.setItem('language', this.language);
        this.titleService.setTitle(this.name);
    }

    // Change language settings to English
    changeLanguageToEn() {
        this.language = 'en';
        this.name = 'Preston Nalls';
        sessionStorage.setItem('language', this.language);
        this.titleService.setTitle(this.name);
    }

    ngDoCheck() {
        this.languageService.setLanguage(this.language);
    }
}
