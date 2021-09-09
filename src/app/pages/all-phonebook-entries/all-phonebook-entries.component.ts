import { Component, OnInit } from '@angular/core';
import {PhonebookService} from '../../services/phonebook.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-all-phonebook-entries',
  templateUrl: './all-phonebook-entries.component.html',
  styleUrls: ['./all-phonebook-entries.component.scss']
})
export class AllPhonebookEntriesComponent implements OnInit {

  constructor(private phoneService:PhonebookService, private route:Router ) { }

  phone:any[] =[];
  selected_contact? : any;







  ngOnInit(): void 
  {
    this.load();
  }

  load() 
  {
    this.phoneService.getAllPhoneBooks().subscribe((detail:any)=>{
      this.phone = detail;
      
    })

	}

  onSelect(contact: any): void 
  {
    this.selected_contact = contact;

    this.phoneService.setContact(this.selected_contact);
    console.log(this.selected_contact);
    this.route.navigate(['/selected-contact'])

  }


}
