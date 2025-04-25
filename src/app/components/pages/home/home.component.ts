import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { format } from 'path';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DpDatePickerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  datePickerConfig = {
    format: 'DD-MM-YYYY'
  }
}
