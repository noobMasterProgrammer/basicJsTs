import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public title = 'This is a binding example';
  public colspan = 5;
  public isActive = true;
  public imageUrl = 'https://avatars3.githubusercontent.com/u/31528255?s=460&u=26403ba4769620c756f93105ac6d575c22c9ff14&v=4';
  constructor() { }

  ngOnInit(): void {
  }
  public onClick(obj: any,$event: any): void{
    console.log(`I am clicked ${obj} `, $event);
  }
  public onButtonClick($event): void{
    $event.stopPropagation();
    console.log('Event Bubbling Button is Clicked');
  }
   public onDivClick(): void{
    console.log('Event Bubbling Div is Clicked');
  }

  public onKeyUpWithoutEventFilter($event: any): void{
    if ($event.keyCode === 13) {
      console.log('Enter is pressed');
    }
  }
  public onKeyUpWithEventFilter(): void{
    console.log('Enter is pressed');
  }
    public onKeyUp($event: any): void{
    console.log($event.target.value);
    //console.log($event.keyCode);
    }
  public onKeyUpWithTemplateVariable(name: any): void{
    console.log(name);
  }
}
