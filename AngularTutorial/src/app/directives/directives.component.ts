import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  @ViewChild("newCourseId") newCourseId: ElementRef;
  @ViewChild("newCourseName") newCourseName: ElementRef;

  public courses: ICourse[] =[
    {id:1,subject:"course 1"},
    {id:2,subject:"course 2"},
    {id:3,subject:"course 3"},
    {id:4,subject:"course 4"},
    {id:5,subject:"course 5"}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  public addCourse(id: number,name: string):void{
    if(id && name){
      this.courses.push({id:id,subject:name});
      this.newCourseId.nativeElement.value="";
      this.newCourseName.nativeElement.value="";
    }
  }
  public removeCourse(course: ICourse): void{
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
}

export interface ICourse{
  id: number;
  subject: string;
}