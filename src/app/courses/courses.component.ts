import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Courses } from '../mock-courses'

@Component({
  selector: '[app-courses]',
  template : `<div>
              <h2> {{name}} </h2>
              <h2> {{2+2}} </h2>
              <h2> {{greetUser()}} </h2>
              <h2>{{siteurl}}</h2>
              <input [id]="id" type="text" value="Balu" /><br><br>
              <input [disabled]=isdisabled id={{id}} type="text" value="Balu" /><br>
              <input bind-disabled=isdisabled id={{id}} type="text" value="Balu" />
              </div>`,
  //templateUrl: './courses.component.html',
  styles :[`
    div{
      color:balck
    }`]
  //styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  public name = "Balu";
  siteurl = window.location.href;
  id = "testId";
  isdisabled = false;
  
  courses = Courses;
  
  course: Course= {
    id : 1,
    name : "Angular"
  }
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "welcome " + this.name;
  }

}
