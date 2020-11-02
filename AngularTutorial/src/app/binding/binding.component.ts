import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public title = 'This is a binding example';
  public imageUrl = 'https://avatars3.githubusercontent.com/u/31528255?s=460&u=26403ba4769620c756f93105ac6d575c22c9ff14&v=4';
  constructor() { }

  ngOnInit(): void {
  }

}
