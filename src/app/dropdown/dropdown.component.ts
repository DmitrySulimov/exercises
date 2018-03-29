import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';
import {Observable} from 'rxjs/Rx';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
	options: string[] = ['first','second','third'];
	option: string = '';
	service;
  viewContainerRef;

    constructor(@Inject(ModalServiceService) service, 
              @Inject(ViewContainerRef) viewContainerRef,
              private dataService:  SendDataService) {
    service.setRootViewContainerRef(viewContainerRef)
    this.service = service;
    this.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
  }

  useModal(value){
    this.option = value;
    this.dataService.changeMessage(this.option);
    this.service.addDynamicComponent()
    let timer = Observable.timer(5000);
    timer.subscribe(x => {this.viewContainerRef.clear()});
  }

}
