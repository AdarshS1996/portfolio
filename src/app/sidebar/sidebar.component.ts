import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Include '/switch' in validUrls to get the switch component working properly
  validUrls = ['/', '/projects', '/services', '/about', '/contact'];
  url: string = '/';

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.validUrls.indexOf(event.url) > -1) {
          this.url = event.url;
        }
      }
    });
  }
}
