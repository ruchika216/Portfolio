import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  title = 'Angular Vertical Tabs';
  viewMode='';

  constructor() { }

  ngOnInit(): void {

this.viewMode = "tab1";
    console.log(this.viewMode);

  }

}

