import { Component, OnInit, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { UserService } from './../../services/user-service';
import { User } from '../../interfaces/user-request.interface';

@Component({
	selector: 'signals-user-info-page',
	templateUrl: './user-info-page.component.html',
	styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

	private userService: UserService = inject (UserService);
	public userId: WritableSignal<number> = signal (1);
	public currentUser: WritableSignal<User | undefined> = signal<User | undefined> (undefined);
	public fullName: Signal<string> = computed<string> (() => {
		if (!this.currentUser ()) return 'Usuario no encontrado';
		return `${ this.currentUser ()!.first_name } ${ this.currentUser ()!.last_name }`;
	});
	public userWasFound: WritableSignal<boolean> = signal (true);

	ngOnInit (): void {
		this.loadUser (this.userId ());
	}

	loadUser (id: number): void {
		if (id <= 0) return;
		this.userId.set (id);
		this.currentUser.set (undefined);
		this.userService.getUserById (id).subscribe ({
			next: (user) => {
				this.currentUser.set (user);
				this.userWasFound.set (true);
			},
			error: (err) => {
				this.currentUser.set (undefined);
				this.userWasFound.set (false);
			},
		});
		// this.userService.getUserById (id).subscribe (user => {
		// 	this.currentUser.set (user);
		// });
	}
}