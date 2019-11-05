import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumeComponent } from './components/resume/resume.component';

const appRoutes: Routes = [
    { path: '', component: ResumeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ResumeRoutingModule {}