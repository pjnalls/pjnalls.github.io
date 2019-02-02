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
    href: string = location.href;
    pageUrl: string = this.href.substr(this.href.lastIndexOf('/'), this.href.length);
}