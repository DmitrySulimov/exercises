import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { ModalServiceService } from './modal-service.service';
import { SendDataService } from './send-data.service';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ModalComponent
  ],
  imports: [  
    BrowserModule,
    FormsModule
  ],
  providers: [ModalServiceService, SendDataService],
  entryComponents: [ ModalComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
