import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from "./components/common/top-header/top-header.component";
import { NavbarComponent } from "./components/common/navbar/navbar.component";
import { HotelListingComponent } from "./components/pages/hotel-listing/hotel-listing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopHeaderComponent, NavbarComponent, HotelListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelsBook';
}
