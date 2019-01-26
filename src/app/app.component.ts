import { Component } from '@angular/core';

import { IntroService } from './intro/shared/intro.service';

@Component({
    selector: 'app',
    template: `
        <intro></intro>
        `,
    styleUrls: ['./app.component.css'],
    providers: [IntroService]
})
export class AppComponent {}
