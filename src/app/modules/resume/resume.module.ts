import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
    declarations: [
        ResumeComponent
    ],
    imports: [
        CommonModule,
        ResumeRoutingModule
    ],
    providers: []
})

export class ResumeModule {}