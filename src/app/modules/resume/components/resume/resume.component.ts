import { Component } from '@angular/core';

@Component({
    selector: 'resume-page',
    styleUrls: ['./resume.component.scss'],
    // Template code added below for .gitattributes purposes.
    template: `
    <div>
        <br />
        <h2>
        Professional Résumé
        </h2>
        <div class="page-1">
        <div class="container">
            <h3>DEVELOPER SKILLS</h3>     
            <div class="column">
                <span><b>Coding Languages</b></span>
                <hr class="resume-hr"/>
                <ul>
                <li>JavaScript (ES5/ES6)</li>
                <li>TypeScript</li>
                <li>Sass (SCSS/CSS)</li>
                <li>HTML</li>
                <li>C#</li>
                <li>SQL/T-SQL</li>
                </ul>
                <span><b>Frameworks/Libraries</b></span>
                <hr class="resume-hr"/>
                <ul>
                <li>Angular (TypeScript)</li>
                <li>ASP.NET MVC (C#)</li>
                <li>jQuery</li>
                </ul>
            </div>
            <div class="column">
                <span><b>CLI/IDE/CD/CI Tools</b></span>
                <hr class="resume-hr"/>
                <ul>
                <li>Webpack</li>
                <li>npm (Node.js)</li>
                <li>nvm (Node.js)</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Visual Studio Code</li>
                <li>Visual Studio Enterprise</li>
                <li>Azure DevOps (TFS)</li>
                <li>Git Bash</li>
                <li>GNU Bash</li>
                <li>PowerShell/cmd (Windows)</li>
                </ul>
            </div>
            <div class="column">
                <span><b>Operating Systems</b></span>
                <hr class="resume-hr"/>
                <ul>
                <li>Windows</li>
                <li>GNU/Linux</li>
                <li>OS X</li>
                </ul>
                <span><b>Natural Languages</b></span>
                <hr class="resume-hr"/>
                <ul>
                <li>English (Native)</li>
                <li>Japanese (JLPT N2)</li>
                <li>Chinese (Basic Literacy)</li>
                <li>Spanish (Elementary)</li>
                </ul>
            </div>
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <div class="full-column">
                <span><b>.NET Developer at Syntel --- (Nov. 2018 ― Present)</b></span>
                <hr class="resume-hr"/>
                <ul>
                <li>Develop ASP.NET MVC, clinical applications with Microsoft tech stack in an Agile environment
                </li>
                <li>Enhance UI via HTML, CSS, vanilla JavaScript, Knockout.js, Ember.js, CoffeeScript, and Razor
                </li>
                <li>Implement RESTful APIs in C# controllers using LINQ for CRUD operations on a database
                </li>
                <li>Design SQL queries to capture electronic medical records (EMRs) from multiple database tables
                </li>
                <li>Create/alter T-SQL functions to add/modify SQL logic called in scripts in .NET MVC application
                </li>
                <li>Create/manage/build branches in Azure DevOps, and test/merge code into master
                </li>
                <li>Write unit testing methods in Visual Studios to yield + and - test results for new C# code written
                </li>
                <li>Participate in Scrums to update fellow developers and leads, QA, business, and product analysts
                </li>
                <li>Proactively communicate with product analysts to clarify requirements then providing solutions
                </li>
                <li>Consistently keep 100% coverage for new C# code I introduce into the clinical application
                </li>
                <li>Track bugs, vulnerabilities, and other issues in projects via the code analysis tool SonarQube
                </li>
                <li>Install/manage Node module/Bower component dependencies with npm and Bower.js
                </li>
                <li>Use Grunt as a task runner ― modifying, enhancing, and running Gruntfiles from the front-end
                </li>
                <br />
                <li><b>Frameworks, Libraries, and Other Tools Used for Project</b></li>
                <ul>
                    <li>ASP.NET MVC, LINQ, Dapper, Unit Testing, Razor</li>
                    <li>Knockout.js, Ember.js, Emblem.js, CoffeeScript, jQuery, Ajax, Bootstrap, Node.js, npm, Bower.js, Grunt.js</li>
                    <li>Microsoft SQL Server 2014</li>
                    <li>Git, Visual Studio 2017, Azure DevOps Server (TFS), SonarQube</li>
                </ul>
                </ul>
            </div>
            <div class="full-column">
                <span><b>Application Developer at Schneider Electric --- (Jun. 2018 ― Nov. 2018)</b></span>
                <hr class="resume-hr"/>
                <ul>
                <li>Developed programmatic Salesforce solutions by contributing custom Lightning Components, HTML, CSS, JavaScript, SOQL and Apex
                </li>
                <li>Provided declarative Salesforce solutions by contributingworkflows, advanced formulas, designing custom objects, field and relationships
                </li>
                <li>Lead development team throughout the Salesforce development lifecycle
                </li>
                <li>Coordinated with team in order to deliver solutions on time during each 3 or 4-week sprints
                </li>
                <li>Productively developed in an Agile environment with Jira (Sprints/Bi-weekly Scrums/Kanban)
                </li>
                <li>Proactively collaborated with to product owners, business analysts, UI/UX designers, and fellow developers during sprints
                </li>
                <li>Closely followed migration, pull-request, and code cleanup processes with Copado and GitHub
                </li>
                </ul>
            </div>
            </div>
        </div>
        <br /><br />
        <div class="page-2">
            <div class="container">
            <div class="full-column">
                <span><b>C# Developer Intern at HCA --- (Dec. 2017 ― May. 2018)</b></span>
                <hr class="resume-hr"/>
                <ul>
                <li>Fixed Angular.js/HTML/CSS/C# issues (500+ bugs & 7k+ code smells) to increase code quality
                </li>
                <li>Contributed code remediation via Git, Microsoft Visual Studio, and Team Foundation Server
                </li>
                <li>Analyzed/tracked/prioritized 36k+ code issues with SonarQube in DevOps/Agile environment
                </li>
                <li>Created/managed/built branches in TFS, and fixed/tested/merged code into master
                </li>
                <li>Optimized remediation by designing RegEx (patterns) to find and replace code in batches
                </li>
                </ul>
            </div>
            <div class="full-column">
            <span><b>Tech Dev Prgrm (TDP) Intern (Software Engineer) at Optum --- (May 2017 ― Aug. 2017)</b></span>
            <hr class="resume-hr"/>
            <ul>
                <li>Developed features/optimizations for an ASP.NET MVC,enterprise app in a Agile environment
                </li>
                <li>Provided JavaScript code and used jQuery/Kendo UI/Bootstrap dependencies for DOM/Ajax/UI
                </li>
                <li>Implemented RESTful APIs in C# using CRUD operations in SQL
                </li>
                <li>Designed/managed databases and created/edited tables with Microsoft SQL Server
                </li>
                <li>Contributed to team repositories via Git (version control) using branches/merges
                </li>
            </ul>
            </div>
            <h3>EDUCATIONAL BACKGROUND</h3>
            <div class="full-column">
            <span><b>Middle Tennessee State University</b></span>
            <hr class="resume-hr"/>
            <ul>
                <li><b>Major: </b>Computer Science, Professional Concentration (B.S., ABET Accreditation)
                </li><br />
                <li>Cumulative GPA: 3.48/4.0</li>
                <li>Computer Science GPA: 3.6/4.0</li>
                <li>Graduation Date: May 2018</li>
                <br /><br />
                <li><b>Major: </b>Electronic Media Communication, Animation Concentration (B.S.)</li>
                <br />
                <li>Graduation Date: December 2012</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    `
})

export class ResumeComponent {}