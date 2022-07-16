import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ResumeComponent } from './resume/resume.component';

// Child Components of Resume
import { EducationComponent } from './resume/resume-child/education/education.component';
import { InterestsComponent } from './resume/resume-child/interests/interests.component';
import { ProgrammingSkillsComponent } from './resume/resume-child/programming-skills/programming-skills.component';
import { ProjectsComponent } from './resume/resume-child/projects/projects.component';
import { WorkHistoryComponent } from './resume/resume-child/work-history/work-history.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'testimonial', component:TestimonialComponent},
  {path:'contact', component:ContactComponent},
  {
    path:'resume', component:ResumeComponent,
    children: [
      {path: 'education', component:EducationComponent},
      {path: 'interests', component:InterestsComponent},
      {path: 'skills', component:ProgrammingSkillsComponent},
      {path: 'projects', component:ProjectsComponent},
      {path: 'work-history', component:WorkHistoryComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
