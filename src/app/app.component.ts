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
}
