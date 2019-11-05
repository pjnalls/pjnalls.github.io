import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule
    ],
    providers: []
})

export class ProjectsModule {}