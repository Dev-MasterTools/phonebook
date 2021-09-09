import { Component, OnInit } from '@angular/core';
import {PhonebookService} from '../../services/phonebook.service';


@Component({
  selector: 'app-selected-contact',
  templateUrl: './selected-contact.component.html',
  styleUrls: ['./selected-contact.component.scss']
})
export class SelectedContactComponent implements OnInit 
{


  constructor(private phoneService:PhonebookService) { }
  to_display:any;



  ngOnInit(): void 
  {
    this.settingData();
  }

  settingData()
  {
    this.to_display = this.phoneService.getContact();
    console.log(this.to_display);
  }


}
