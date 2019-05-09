import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = [
    { path: 'learn-more', title: 'Learn More' },
    { path: 'resources', title: 'Resources' },
    { path: 'log-in', title: 'Log In' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
