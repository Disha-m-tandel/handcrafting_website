import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { RouterModule } from '@angular/router';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ContactComponent],//always import RouterModule in components that are loaded via routing
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
