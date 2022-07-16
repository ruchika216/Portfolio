import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { EducationComponent } from './resume/resume-child/education/education.component';
import { WorkHistoryComponent } from './resume/resume-child/work-history/work-history.component';
import { ProgrammingSkillsComponent } from './resume/resume-child/programming-skills/programming-skills.component';
import { ProjectsComponent } from './resume/resume-child/projects/projects.component';
import { InterestsComponent } from './resume/resume-child/interests/interests.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    TestimonialComponent,
    ContactComponent,
    AboutComponent,
    EducationComponent,
    WorkHistoryComponent,
    ProgrammingSkillsComponent,
    ProjectsComponent,
    InterestsComponent,
    NavBarComponent,
    FooterComponent,
    
  ],
  imports: [
    AngularTypewriterEffectModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
