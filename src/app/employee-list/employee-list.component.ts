import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { range, of, Observable } from 'rxjs';
import { Event, Router, RouterState, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-list',
  template : `
              <h2>Employee list</h2>
              <h2>{{errormsg}}</h2>
              <ul *ngFor="let employee of employees">
                  <li>{{employee.name}}</li>
              </ul>
              <p appHighlight>Highlight me!</p>
              <input #uname type="text" value="Balu"/>
              <!-- <div [innerHtml]="htmlSnippet"></div>  -->
  `,
  // templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errormsg;
  htmlSnippet ;
  @ViewChild('uname') input;

  ngAfterViewInit() {
    console.log(this.input.nativeElement.value);
  }
  constructor(private employeeService: EmployeeService,
              private router: Router,
              route: ActivatedRoute,
              protected sanitizer: DomSanitizer) {

    this.htmlSnippet  = this.sanitizer.bypassSecurityTrustScript("<script>safeCode()</script>");     
    const source = range(1, 10);
    const myObservable = of(1, 2, 3);
    // Create observer object
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
     };

    const myObserver2 = {
      next: x => console.log('Today date:' + new Date().getMilliseconds())
     };

    // Execute with the observer object and Prints out each item
    source.subscribe(myObserver);
    myObservable.subscribe(myObserver);
    myObservable.subscribe(myObserver2);
    const state: RouterState = router.routerState;
    const root: ActivatedRoute = state.root;
    const child = root.firstChild;
    // const id: Observable<string> = child.params.map(p => p.id);
    console.log('State:: ' + state); // Route(url:'', path:'')
    console.log('Root:: ' + root); // Route(url:'', path:'')
    console.log('Child:: ' + child);

    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.pipe(map(d => d.user));

    console.log('Id:: ' + id);
    console.log('Url:: ' + url);
    console.log('User:: ' + user);
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('NavigationStart:: ');
      }

      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:: ');
      }

      if (event instanceof NavigationError) {
        console.log('NavigationError:: ');
      }
  });

  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data,
                                                  error => this.errormsg = error);
  }

}
