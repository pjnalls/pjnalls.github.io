import { Component, OnChanges, OnDestroy } from '@angular/core';
import { LanguageService } from '../../../../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'resume-page',
  styleUrls: ['./resume.component.scss'],
  // Template code added below for .gitattributes purposes.
  template: `
  <div *ngIf="language === 'en'">
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
          <li>Sass (SCSS)</li>
          <li>HTML/CSS</li>
          <li>C#</li>
          <li>SQL/T-SQL</li>
          </ul>
          <span><b>Frameworks & Libraries</b></span>
          <hr class="resume-hr"/>
          <ul>
          <li>Angular (TypeScript)</li>
          <li>ASP.NET MVC (C#)</li>
          <li>MSTest (C# Testing Framework)</li>
          </ul>
        </div>
        <div class="column">
          <span><b>CLI/IDE/CI/CD Tools</b></span>
          <hr class="resume-hr"/>
          <ul>
          <li>Angular CLI</li>
          <li>npm (Node.js)</li>
          <li>nvm (Node.js)</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Visual Studio Code</li>
          <li>Visual Studio Enterprise</li>
          <li>Azure DevOps (TFS)</li>
          <li>Git (GNU) Bash</li>
          <li>Karma (Test Runner)</li>
          <li>Jasmine (TDD)</li>
          <li>Jest (TDD)</li>
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
          <span><b>.NET Developer at Atos Syntel, Inc. --- (Nov. 2018 ― Present)</b></span>
          <hr class="resume-hr"/>
          <ul>
          <li>Develop ASP.NET MVC, .NET Framework apps with Microsoft tech stack in an Agile environment
          </li>
          <li>Enhance UI via HTML, CSS, Bootstrap, JavaScript, Knockout.js, Ember.js, CoffeeScript,
           Handlebars.js, jQuery, Ajax, and Razor
          </li>
          <li>Implement RESTful APIs in C# controllers using LINQ for CRUD operations on a database
          </li>
          <li>Design SQL queries to capture electronic medical records (EMRs) from multiple database tables
          </li>
          <li>Design RegEx to parse data received from ETL and automate/accelerate development
          </li>
          <li>Create/alter T-SQL functions to add/modify SQL logic called in scripts for clinical apps
          </li>
          <li>Create/manage/build branches in Azure DevOps, and test/merge code into master
          </li>
          <li>Write unit testing methods in Visual Studio to yield + and - test results for new C# code written
          </li>
          <li>Participate in daily Scrums to update developers, leads, QA, and product analysts
          </li>
          <li>Proactively communicate with product analysts for clarifying requirements and providing solutions
          </li>
          <li>Consistently keep 100% coverage of new C# code I introduce into the main clinical application
          </li>
          <li>Track bugs, vulnerabilities, and other issues in projects via the code analysis tool SonarQube
          </li>
          <li>Install/manage Node module/NuGet dependencies with Node.js (npm & nvm)/Visual Studio
          </li>
          <li>Use Grunt as a task runner/module bundler ― modifying/enhancing/running Gruntfiles
          </li>
          <li>Lead development for Jest (JavaScript testing), Visual Studio, & SonarQube integrations
          </li>
          <br />
          <li><b>Languages, Frameworks, Libraries, and Other Tools Used for Projects</b></li>
          <ul>
            <li>JavaScript, HTML, CSS, C#, SQL/T-SQL</li>
            <li>ASP.NET MVC, .NET Framework, NuGet, LINQ, Dapper, Entity Framework, MSTest (C# Testing Framework), Razor</li>
            <li>Knockout.js, Ember.js, Emblem.js, CoffeeScript, Handlebars.js, jQuery, Ajax, Bootstrap, Node.js, 
            npm, nvm, Bower.js, Grunt.js, Jest (JavaScript Testing Framework)</li>
            <li>Microsoft SQL Server 2014</li>
            <li>Git, Visual Studio (2013, 2017), Azure DevOps Server (TFS), SonarQube</li>
          </ul>
          </ul>
        </div>
        <div class="full-column">
          <span><b>Application Developer at Schneider Electric --- (Jun. 2018 ― Nov. 2018)</b></span>
          <hr class="resume-hr"/>
          <ul>
          <li>Developed programmatic Salesforce solutions by contributing custom Lightning Components, HTML, CSS, JavaScript, SOQL and Apex
          </li>
          <li>Provided declarative Salesforce solutions by contributing workflows, advanced formulas, designing custom objects, field and relationships
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
          <span><b>C# Developer Intern at HCA --- (Dec. 2017 ― May 2018)</b></span>
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
            <li>Courses:</li>
            <br />
            <table>
              <tr>
                <th>Course Name</th>
                <th>Grade</th>
              </tr>
              <tr>
                <td>Algorithms and Data Structures</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Calculus II</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Calculus-Based Probability and Statistics</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Elements of Linear Algebra</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Introduction to Computer Systems</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Java: Android</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Software Engineering</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Theory of Programming Languages</td>
                <td>B+</td>
              </tr>
              <tr>
                <td>Web Technologies</td>
                <td>B+</td>
              </tr>
            </table>
            <br /><br />
            <li><b>Major: </b>Electronic Media Communication, Animation Concentration (B.S.)</li>
            <br />
            <li>Graduation Date: December 2012</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div *ngIf="language === 'jp'">
    <br />
    <h2>
    履歴書
    </h2>
    <div class="page-1">
      <div class="container">
        <h3>学歴</h3>
        <div class="full-column">
          <span><b>2007年8月：ミドルテネシー州立大学（MTSU）入学</b></span>
          <hr class="resume-hr"/>
          <ul>
            <li><b>2008年8月：</b>関西外国語大学　留学</li>
            <li><b>2010年5月：</b>電子メディア・コミュニケーション（2次元と3次元アニメーション分野）専攻</li>
            <li><b>2012年6月：</b>福島大学10日間東日本大震災復興支援ボランティアプログラム　留学</li>
            <li><b>2012年12月：</b>MTSU卒業</li>
            <br/>
            <li><b>2015年8月：</b>計算機科学（プロフェショナル・プログラム、ABET公認）専攻</li>
            <li><b>2018年5月：</b>MTSU再卒業（計算機科学GPA：3.6／4.0）</li>
          </ul>
        </div>
        <br/><br/>
        <h3>職歴</h3>
        <div class="full-column">
          <span><b>2017年5月：</b>UnitedHealth Group（ユナイテッド・ヘルス）入社
          <br/>技術開発プログラム (TDP) インターンシップ (ソフトウエアエンジニアリング)</span>
          <br/><span><b>2017年8月</b>：インターンシップの完了により退職</span>
        </div>
        <br/>
        <div class="full-column">
          <span><b>2017年12月：</b>HCA（ホスピタルコーポレーション・オブ・アメリカ）入社
          <br/>C#開発インターンシップ</span>
          <br/><span><b>2018年5月：</b>インターンシップの完了により退職</span>
        </div>
        <br/>
        <div class="full-column">
          <span><b>2018月6月：</b>Schneider Electric（シュナイダーエレクトリック）入社
          <br/>アプリケーション開発</span>
          <br/>
          <span><b>2018月11月：</b>.NET開発経験希望により退職</span>
        </div>
        <br/>
        <div class="full-column">
          <span><b>2018年11月：</b>Atos Syntel, Inc.（アトス・センテル）入社
          <br/>.NET開発</span>
        </div>
        <br/><br/>
        <h3>特技</h3>   
        <div class="column">
          <span><b>プログラミング言語</b></span>
          <hr class="resume-hr"/>
          <ul>
          <li>JavaScript (ES5/ES6)</li>
          <li>TypeScript</li>
          <li>Sass (SCSS)</li>
          <li>HTML/CSS</li>
          <li>C#</li>
          <li>SQL/T-SQL</li>
          </ul>
          <span><b>フレームワークと<br/>ライブラリ</b></span>
          <hr class="resume-hr"/>
          <ul>
          <li>Angular (TypeScript)</li>
          <li>ASP.NET MVC (C#)</li>
          <li>MSTest (C#ユニットテスト)</li>
          </ul>
        </div>
        <div class="column">
          <span><b>CLI/IDE/CI/CDツール</b></span>
          <hr class="resume-hr"/>
          <ul>
          <li>Angular CLI</li>
          <li>npm (Node.js)</li>
          <li>nvm (Node.js)</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Visual Studio Code</li>
          <li>Visual Studio Enterprise</li>
          <li>Azure DevOps (TFS)</li>
          <li>Git (GNU) Bash</li>
          <li>Karma (テスト実行)</li>
          <li>Jasmine <br/>(テスト駆動開発)</li>
          <li>Jest <br/>(テスト駆動開発)</li>
          </ul>
        </div>
        <div class="column">
          <span><b>オペレーティング<br/>システム</b></span>
          <hr class="resume-hr"/>
          <ul>
          <li>Windows</li>
          <li>GNU/Linux</li>
          <li>OS X</li>
          </ul>
          <span><b>自然言語</b></span>
          <hr class="resume-hr"/>
          <ul>
          <li>英語（ネイティブ）</li>
          <li>日本語
          <br/>(日能試2級合格)</li>
          <li>中国語 (初級)</li>
          <li>スペイン語 (初級)</li>
          </ul>
        </div>
      </div>
    </div>  
  </div>
  `
})

export class ResumeComponent implements OnChanges, OnDestroy {
  language: string;
  subscription: Subscription;

  constructor(private languageService: LanguageService) { 
      this.subscription = this.languageService.languageSetting$
          .subscribe(
              language => {
                  this.language = language;
              }
          );
  }

  ngOnChanges() {
      this.subscription;
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}