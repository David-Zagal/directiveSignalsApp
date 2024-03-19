import { Component, EffectRef, OnDestroy, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
	selector: 'signals-properties-page',
	templateUrl: './properties-page.component.html',
	styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnInit, OnDestroy {

	public counter: WritableSignal<number> = signal (10);
	public user: WritableSignal<User> = signal<User> ({
		'id': 2,
		'email': 'janet.weaver@reqres.in',
		'first_name': 'Janet',
		'last_name': 'Weaver',
		'avatar': 'https://reqres.in/img/faces/2-image.jpg',
	});

	public fullName: Signal<string> = computed (() => `${ this.user ().first_name } ${ this.user ().last_name }`);
	public userChangedEffect: EffectRef = effect (() => {
		console.log (`${ this.user ().first_name } - ${ this.counter () }`);
		// console.log ('UserChangedEffect triggered');
	});

	ngOnInit (): void {
		setInterval (() => {
			this.counter.update (current => current + 1);
			if (this.counter () === 15) this.userChangedEffect.destroy ();
		}, 1000);
	}

	ngOnDestroy (): void {
		// this.userChangedEffect.destroy ();
	}

	increaseBy (value: number): void {
		this.counter.update (current => current + value);
	}

	onFieldUpdated (field: keyof User, value: string): void {
		// this.user.set ({
		// 	...this.user (),
		// 	[field]: value,
		// });
		// this.user.update (current => ({
		// 	...current,
		// 	[field]: value,
		// }));
		this.user.update (current => {
			switch (field) {
				case 'avatar':
					current.avatar = value;
				break;
				case 'email':
					current.email = value;
				break;
				case 'first_name':
					current.first_name = value;
				break;
				case 'last_name':
					current.last_name = value;
				break;
				case 'id':
					current.id = Number (value);
				break;
			}
			return current;
		});
		// console.log ({ field, value });
	}
}