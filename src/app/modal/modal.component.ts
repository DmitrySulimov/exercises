import { Input ,Component, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

	option:string = '';

  constructor(private dataService: SendDataService) { }

  ngOnInit() {
  	this.dataService.currentMessage.subscribe(option => this.option = option)
  }


}
