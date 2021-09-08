import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class PhonebookService 
{

	constructor(private __http: HttpClient) { }

	set_contact : any;

	url = "http://localhost:3000/api/phonebook";

	addNewPhonebook(phonebook: any)
	{
		this.__http.post(`${this.url}`, phonebook).subscribe((res: any) => {
			console.log(res);
		}, (err: any) => {
			console.warn (err);
		});
	}


	getAllPhoneBooks() 
	{
		return this.__http.get(this.url);
	}


	setContact(contact:any)
	{
		this.set_contact = contact;
	}

	getContact()
	{
		return this.set_contact;
	}

}
