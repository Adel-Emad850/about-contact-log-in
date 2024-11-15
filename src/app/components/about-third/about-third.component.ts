import { Component } from '@angular/core';

@Component({
  selector: 'app-about-third',
  standalone: true,
  imports: [],
  // templateUrl: './about-third.component.html',
  // styleUrl: './about-third.component.css'
  template:`
    <div class="viewer-container">
      <div class="viewer reverse-viewer">
        <div class="first-half">
          <h2>Our Values</h2>
          <h4>Our values are at the heart of everything we do</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus omnis vero veritatis, accusamus maiores deserunt placeat. Sint eius id numquam nesciunt beatae incidunt doloribus animi architecto delectus? Quam, aspernatur cupiditate?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione error amet, ut soluta provident, illo quidem consequatur nesciunt, doloremque animi quo quis explicabo numquam deserunt necessitatibus molestias! A, voluptas labore.
          </p>
        </div>
        <div class="second-half">
          <div class="about-third-img"></div>
        </div>
      </div>
    </div>
  `
})
export class AboutThirdComponent {

}
