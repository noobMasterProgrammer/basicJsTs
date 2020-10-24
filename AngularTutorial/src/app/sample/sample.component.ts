import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  name = 'Abhishek Ghosh';
  courses = ['course-1', 'course-2', 'course-3', 'course-4', 'course-5'];
  private className = 'SampleComponent';
  private users: string[];

  constructor(private sampleService: SampleService) {
    console.log(`${this.className}.constructor is called`);
   }
  getName(): string {
    return this.name;
  }

  ngOnInit(): void {
    console.log(`${this.className}.ngOnInit is called`);
    this.sampleService.getUser().subscribe((users) => {
      this.users = users;
    });
  }
  public getUsers(): string[]{
    console.log(`${this.className}.getUsers is called`);
    return this.users;
  }

}
