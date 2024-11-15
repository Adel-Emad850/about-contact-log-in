import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ContactComponent, LogInComponent, SignUpComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  template: `
    <!-- <app-about/> -->
     <!-- <app-contact/> -->
      <!-- <app-log-in/> -->
      <app-sign-up/>
  `
})
export class AppComponent {
  title = 'e--commerce';
}
