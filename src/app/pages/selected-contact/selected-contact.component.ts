import { Component, OnInit } from '@angular/core';
import {PhonebookService} from '../../services/phonebook.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';





@Component({
  selector: 'app-selected-contact',
  templateUrl: './selected-contact.component.html',
  styleUrls: ['./selected-contact.component.scss']
})
export class SelectedContactComponent implements OnInit 
{


  constructor(private __phoneService:PhonebookService) { }
  to_display:any;
  book_update:any;


	phonebookForm = new FormGroup({
    id: new FormControl(''),
		name: new FormControl(''),
		phone: new FormControl(''),
		email: new FormControl(''),
	})



  ngOnInit(): void 
  {
    this.settingData();
  }

  settingData()
  {
    this.to_display = this.__phoneService.getContact();

    this.phonebookForm.controls['id'].setValue(this.to_display.id);
    this.phonebookForm.controls['name'].setValue(this.to_display.name);
    this.phonebookForm.controls['phone'].setValue(this.to_display.phone);
    this.phonebookForm.controls['email'].setValue(this.to_display.email);
    
    console.log(this.to_display);
  }

  submitPhoneBootEntry()
  {

		//this.__phoneService.addNewPhonebook(this.phonebookForm.value);
	}


  deteteContact()
  {
    let id =  this.phonebookForm.controls['id'].value;
    this.__phoneService.deleteContact(id);
    
  }

  updateContact()
  {
    let id =  this.phonebookForm.controls['id'].value;
    this.book_update = 
    {
      
      name: this.phonebookForm.controls['name'].value,
      phone: this.phonebookForm.controls['phone'].value,
      email: this.phonebookForm.controls['email'].value,
    }
     this.__phoneService.updateContact(id,this.book_update)
  }




}
