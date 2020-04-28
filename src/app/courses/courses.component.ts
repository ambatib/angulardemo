import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Courses } from '../mock-courses';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: '[app-courses]',
  template : `<div>
              <h2> {{name}} </h2>
              <h2> {{2+2}} </h2>
              <h2> {{greetUser()}} </h2>
              <script>alert("0wned")</script> <b>Syntax</b>
              <h2>Find the size of a file</h2>
              <!--<p>Size: {{288966 | customFileSizePipe: 'GB'}}</p>-->
              <h2>{{siteurl}}</h2>
              <input  type="text" value="Balu" /><br><br>
              <input [disabled]=isdisabled  type="text" value="Balu" /><br>
              <input bind-disabled=isdisabled  type="text" value="Balu" />
              </div>
              <div><code>observable|async</code>:
                        Time: {{ time | async }}</div>`,
  // templateUrl: './courses.component.html',
  styles : [`
    div{
      color:balck
    }`]
  // styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public name = 'Balu';
  siteurl = window.location.href;
  id = 'testId';
  isdisabled = false;

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  courses = Courses;

  course: Course = {
    id : 1,
    name : 'Angular'
  };
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return 'welcome ' + this.name;
  }

}
