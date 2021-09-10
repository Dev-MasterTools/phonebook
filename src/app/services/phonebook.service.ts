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

	headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });



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


	deleteContact(id:any)
	{
		return this.set_contact;
	}

	updateContact(id:any, contact : any)
	{
		console.log("Service Works");
		console.log(contact);

		const body = JSON.stringify
			({
				name: contact.title,
				phone: contact.decsription,
				email: contact.price,
		

			});

		//setting up the headers for our reqeus

		this.__http.patch(`${this.url}/${id}`, body, { headers: this.headers }).subscribe(
			(data) => {
				console.log(data);
			},
			(err: HttpErrorResponse) => {
				if (err.error instanceof Error) {
					console.log('Client-side.');
					console.log(body);

				} else {
					console.log('Server-side.');
					console.log(body);
				}
			}
		);

	}


}
