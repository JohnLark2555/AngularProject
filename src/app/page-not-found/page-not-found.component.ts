import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  //This statement is used for routing Base elements like whwnever user put wrong url then automatically base component work(Here 'Home' Component work Ok!)
  constructor(private route:Router)
  {
    this.route.navigate(['./']);
  }

}
