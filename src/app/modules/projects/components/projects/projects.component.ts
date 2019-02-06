import { Component, ViewChild, Renderer2, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'projects-page',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit{

    constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: any) {}
    @ViewChild('calendar') calendar: ElementRef

    public ngOnInit() {
        
        let s = this._renderer2.createElement('script');

        s.type = 'text/javascript';
        s.src = 'src/vendor/IonicaBizau/github-calendar/dist/github-calendar.min.js';
        this._renderer2.appendChild(this.calendar.nativeElement, s);

        s = this._renderer2.createElement('link');

        s.rel = 'stylesheet';
        s.href='src/vendor/IonicaBizau/github-calendar/dist/github-calendar.css';
        this._renderer2.appendChild(this.calendar.nativeElement, s);
        
        s = this._renderer2.createElement('link');

        s.rel = 'stylesheet';
        s.href='src/vendor/IonicaBizau/github-calendar/dist/github-calendar-responsive.css';
        this._renderer2.appendChild(this.calendar.nativeElement, s);
    }
}