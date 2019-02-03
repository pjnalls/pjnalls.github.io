import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { state: 'HomePage'} },
    { path: 'bio', loadChildren: './modules/bio/bio.module#BioModule', data: { state: 'BioPage'} },
    { path: 'resume', loadChildren: './modules/resume/resume.module#ResumeModule', data: { state: 'ResumePage'} },
    { path: 'projects', loadChildren: './modules/projects/projects.module#ProjectsModule', data: { state: 'ProjectsPage'} },
    { path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule', data: { state: 'ContactPage'} }
];

@NgModule({
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}