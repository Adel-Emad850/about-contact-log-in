import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-body',
  standalone: true,
  imports: [],
  // templateUrl: './contact-body.component.html',
  // styleUrl: './contact-body.component.css'
  template:`
    <div class="viewer-container contact-container">
      <div class="viewer reverse-viewer">
        <div class="first-half contact-info-half">
          <h2>get in touch</h2>
          <p>Have questions or need assistance? Click the 'Contact Us' icon to get in touch with our friendly and responsive customer support team</p>
          <ul>
            <li>
              <i class="fa-solid fa-location-dot"></i>
              <div class="contact-info">
                <h4>Address</h4>
                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
              </div>
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <div class="contact-info">
                <h4>phone</h4>
                <p>(405) 555-0128</p>
              </div>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <div class="contact-info">
                <h4>email</h4>
                <p>hello&#64;exmaple.com</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="second-half contact-form">
          <form action="">
            <div class="form-groups">
              <label for="contact-name">Name</label>
              <input type="text" class="form-controls" id="contact-name" placeholder="Enter your name">
            </div>
            <div class="form-groups">
              <label for="contact-email">Email</label>
              <input type="email" class="form-controls" id="contact-email" placeholder="Enter your email">
            </div>
            <div class="form-groups">
              <label for="contact-message">Message</label>
              <textarea class="form-controls" id="contact-message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <div class="form-groups">
              <input type="submit" value="send">
            </div>
          </form>
        </div>
      </div>
    </div>
  `
})
export class ContactBodyComponent {

}
