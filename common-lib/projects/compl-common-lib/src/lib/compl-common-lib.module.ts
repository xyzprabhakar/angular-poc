import { ModuleWithProviders, NgModule } from '@angular/core';
import { ComplCommonLibComponent } from './compl-common-lib.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {AlertService} from './services/alert.service';


@NgModule({
  declarations: [
    ComplCommonLibComponent
  ],
  imports: [
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers:[],
  exports: [
    ComplCommonLibComponent
  ]
})
export class ComplCommonLibModule {
  /*
  static forRoot()  {
    return {
      ngModule: ComplCommonLibModule,
      providers: [ AlertService ]
    }
  }*/
    static forRoot():ModuleWithProviders<ComplCommonLibModule>  {
      return {
        ngModule: ComplCommonLibModule,
        providers: [ AlertService ]
      };
    }
 }
