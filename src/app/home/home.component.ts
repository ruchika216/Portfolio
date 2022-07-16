import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  title = 'angularTests';
  list = ['MEAN Stack Developer', 'Angular Developer', 'Full Stack Developer']

  constructor() { }

  ngOnInit(): void {



  }



}
