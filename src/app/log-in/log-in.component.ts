import { Component, ElementRef, ViewChild ,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [],
  // templateUrl: './log-in.component.html',
  // styleUrl: './log-in.component.css'
  template:`
  <div class="log-in">
      <div class="log-form">
        <form action="">
          <fieldset>
            <legend>Log In</legend>
            <div class="form-groups">
              <label for="log-in-email">Email</label>
              <input type="email" class="form-controls" id="log-in-email" placeholder="Enter your email">
            </div>
            <div class="form-groups">
              <label for="log-in-password">Password</label>
              <div class="password-container">
                <input 
                  #passwordInput
                  type="password" 
                  class="form-controls" 
                  id="log-in-password" 
                  placeholder="Enter your password"
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
export class LogInComponent implements AfterViewInit {
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
