import { Component } from '@angular/core';
import { ContactBodyComponent } from "../contact-body/contact-body.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactBodyComponent],
  // templateUrl: './contact.component.html',
  // styleUrl: './contact.component.css'
  template:`
    <div class="contact">
      <div class="page-head">
        <h1>contact us</h1>
      </div>
      <app-contact-body/>

    </div>
  `
})
export class ContactComponent {

}
