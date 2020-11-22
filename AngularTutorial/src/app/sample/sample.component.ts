import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleService } from './sample.service';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';


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
  public binding ="/binding";

  constructor(private sampleService: SampleService,private activateRoute: ActivatedRoute,private storageService: StorageService) {
    console.log(`${this.className}.constructor is called`);
    // this.activateRoute.data.subscribe(res=>{
    //   console.log(res);
    // });
    this.storageService.fetch().subscribe(res=>{
      console.log(res);
    })
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
