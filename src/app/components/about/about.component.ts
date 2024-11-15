import { Component } from '@angular/core';
import { AboutFirstComponent } from "../about-first/about-first.component";
import { AboutSecondComponent } from "../about-second/about-second.component";
import { AboutThirdComponent } from "../about-third/about-third.component";
import { AboutForthComponent } from "../about-forth/about-forth.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutFirstComponent, AboutSecondComponent, AboutThirdComponent, AboutForthComponent],
  // templateUrl: './about.component.html',
  // styleUrl: './about.component.css'
  template: `
    <div class="about">
      <div class="page-head">
        <h1>About US</h1>
      </div>
      <app-about-first/>
      <app-about-second/>
      <app-about-third/>
      <app-about-forth/>
    </div>
  `
})
export class AboutComponent {

}
