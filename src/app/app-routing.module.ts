import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { BioComponent } from './modules/bio/components/bio/bio.component';
import { ResumeComponent } from './modules/resume/components/resume/resume.component';
import { PortfolioComponent } from './modules/portfolio/components/portfolio/portfolio.component';
import { ContactComponent } from './modules/contact/components/contact/contact.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { state: 'HomePage'} },
    { path: 'bio', component: BioComponent, data: { state: 'BioPage'} },
    { path: 'resume', component: ResumeComponent, data: { state: 'ResumePage'} },
    { path: 'portfolio', component: PortfolioComponent, data: { state: 'PortfolioPage'} },
    { path: 'contact', component: ContactComponent, data: { state: 'ContactPage'} }
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