import { Component } from '@angular/core';
import { AlertService } from 'compl-common-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'comp-autotn';
  constructor(private libService:AlertService){
    libService.showSuccess();
  }
}
