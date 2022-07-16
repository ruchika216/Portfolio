import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'angularTests';
  list = ['Get in Touch ✉', 'Stay Connected📱']

  constructor() { }

  ngOnInit(): void {
  }

}
