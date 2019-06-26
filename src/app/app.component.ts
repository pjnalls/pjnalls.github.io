import { Component } from '@angular/core';
import { routerTransition } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        routerTransition()
    ]
})

export class AppComponent {
    name: string = 'Preston Nalls';
    lang: string = 'en';

    // Change language settings to Japanese
    changeLanguageToJp() {
        this.lang = 'jp'
    }

    // Change language settings to English
    changeLanguageToEn() {
        this.lang = 'en'
    }
}
