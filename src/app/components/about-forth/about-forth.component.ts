import { Component } from '@angular/core';

@Component({
  selector: 'app-about-forth',
  standalone: true,
  imports: [],
  // templateUrl: './about-forth.component.html',
  // styleUrl: './about-forth.component.css'
  template:`
    <div class="viewer-container">
      <div class="viewer normal-viewer">
        <div class="first-half text-align-center">
          <h4><span>Why Choose BlackFridayShop?</span></h4>
          <h2>the joy of shopping at its best</h2>
        </div>
        <div class="second-half about-forth">
          <ul>
            <li>
              <i class="fa-solid fa-lock"></i>
              <h3>100% satisfaction guarantee</h3>
              <p>No matter what you're buying, we'll do our best to meet your expectations.</p>
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <h3>24/7 customer support</h3>
              <p>We're here to help you find the perfect product, no matter where you are.</p>
            </li>
            <li>
            <i class="fa-solid fa-truck-fast"></i>
              <h3>Free shipping on orders over $100</h3>
              <p>We'll make sure your purchase reaches your doorstep, no matter where</p>
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i>
              <h3>Free shipping on orders over $100</h3>
              <p>We'll make sure your purchase reaches your doorstep, no matter where</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class AboutForthComponent {

}
