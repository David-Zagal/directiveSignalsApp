import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private baseUrl: string = 'https://reqres.in/api/users';
	private http: HttpClient = inject (HttpClient);

	// constructor (private http: HttpClient) {}

	getUserById (id: number): Observable<User> {
		return this.http.get<SingleUserResponse> (`${ this.baseUrl }/${ id }`).pipe (
			map (response => response.data),
			// tap (console.log),
		);
	}
}