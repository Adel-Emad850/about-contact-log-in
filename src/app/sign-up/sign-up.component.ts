import { Component, ElementRef, ViewChild ,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  // templateUrl: './sign-up.component.html',
  // styleUrl: './sign-up.component.css'
  template:`
  <div class="sign-up">
      <div class="log-form">
        <form action="">
          <fieldset>
            <legend>sign up</legend>
            <div class="form-groups two-input">
              <div class="input-half">
              <label for="sign-up-first-name">first name</label>
              <input type="text" class="form-controls" id="sign-up-first-name" placeholder="First Name">
              </div>
              <div class="input-half">
              <label for="sign-up-last-name">last name</label>
              <input type="text" class="form-controls" id="sign-up-last-name" placeholder="Last Name">
              </div>
            </div>
            <div class="form-groups">
              <label for="sign-up-email">Email</label>
              <input type="email" class="form-controls" id="sign-up-email" placeholder="Enter your email">
            </div>
            <div class="form-groups">
              <label for="sign-up-phone">phone number</label>
              <input type="text" class="form-controls" id="sign-up-phone" placeholder="Enter your phone number">
            </div>
            <div class="form-groups">
              <label for="sign-up-date">birth date</label>
              <input type="date" class="form-controls" id="sign-up-date">
            </div>
            <div class="form-groups">
              <label for="sign-up-password">Password</label>
              <div class="password-container">
                <input 
                  #passwordInput
                  type="password" 
                  class="form-controls" 
                  id="sign-up-password" 
                  placeholder="Enter your password"
                >
                <button type="button" class="toggle-password" (click)="togglePasswordVisibility()">
                  <i id="toggle-icon" class="fa fa-eye"></i>
                </button>
              </div>
            </div>
            <div class="form-groups">
              <label for="sign-up-rpassword">repeat Password</label>
              <div class="password-container">
                <input 
                  #passwordInput
                  type="password" 
                  class="form-controls" 
                  id="sign-up-rpassword" 
                  placeholder="Reenter your password"
                >
                <button type="button" class="toggle-password" (click)="togglePasswordVisibility()">
                  <i id="toggle-icon" class="fa fa-eye"></i>
                </button>
              </div>
            </div>
            <div class="hr"></div>
            <div class="or-log">
              <span>or with social media</span>
              <div class="social-media">
                <a href="#"><i class="fa-brands fa-facebook-square"></i></a>
                <a href="#"><i class="fa-brands fa-google"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
            <div class="form-groups log-btn">
              <input type="submit" value="Log In">
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  `
})
export class SignUpComponent implements AfterViewInit {
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  ngAfterViewInit(): void {
    // Ensures the ViewChild is available after the view initializes.
    if (!this.passwordInput) {
      console.error('Password input not found!');
    }
  }

  togglePasswordVisibility(): void {
    const input = this.passwordInput.nativeElement as HTMLInputElement;
    const icon = document.getElementById('toggle-icon');

    if (input.type === 'password') {
      input.type = 'text';
      icon?.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      input.type = 'password';
      icon?.classList.replace('fa-eye-slash', 'fa-eye');
    }
  }
}

