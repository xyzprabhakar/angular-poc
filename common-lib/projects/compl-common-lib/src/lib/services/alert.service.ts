import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) { }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
