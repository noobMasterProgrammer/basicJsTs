import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  name = 'Abhishek Ghosh';
  courses = ['course-1', 'course-2', 'course-3', 'course-4', 'course-5'];

  constructor() { }
  getName(): string {
    return this.name;
  }

  ngOnInit(): void {
  }

}
