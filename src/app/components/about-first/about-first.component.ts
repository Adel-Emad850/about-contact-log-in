import { Component } from '@angular/core';

@Component({
  selector: 'app-about-first',
  standalone: true,
  imports: [],
  // templateUrl: './about-first.component.html',
  // styleUrl: './about-first.component.css'
  template: `
    <div class="main-about">
      <div class="main-img"></div>
      <div class="viewer normal-viewer">
        <div class="first-half">
          <h2>Our story is one of <span>passion, perseverance, and commitment</span></h2>
        </div>
        <div class="second-half">
          <h4>Our journey began when a group of dedicated individuals, fueled by a shared love for exceptional deals and unmatched savings, came together to create a shopping experience like no other</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus omnis vero veritatis, accusamus maiores deserunt placeat. Sint eius id numquam nesciunt beatae incidunt doloribus animi architecto delectus? Quam, aspernatur cupiditate?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione error amet, ut soluta provident, illo quidem consequatur nesciunt, doloremque animi quo quis explicabo numquam deserunt necessitatibus molestias! A, voluptas labore.
          </p>
        </div>
      </div>
    </div>
  `
})
export class AboutFirstComponent {

}
