import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class PhonebookService 
{

	constructor(private __http: HttpClient) { }

	set_contact : any;

	url = "https://tools-phonebook-api.herokuapp.com/api/phonebook";

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



	updateContact(id:string, payload : any)
	{

	// 	console.log(payload);

	// 	const updatateUrl = `$(this.url)/${id}`;
	// 	console.log(payload);
	//  return this.__http.patch(`${updatateUrl}`,payload)


		//setting up the headers for our reqeus

		this.__http.patch(`${this.url}/${id}`, payload, { headers: this.headers }).subscribe(
			(data) => {
				console.log(data);
			},
			(err: HttpErrorResponse) => {
				if (err.error instanceof Error) {
					console.log('Client-side.');
					console.log(payload);

				} else {
					console.log('Server-side.');
					console.log(payload);
				}
			}
		);
	}


	deleteContact(id:any)
	{
		const body = JSON.stringify({_id: id});

		this.__http.delete(`${this.url}/${id}`, { headers: this.headers }).subscribe(
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
