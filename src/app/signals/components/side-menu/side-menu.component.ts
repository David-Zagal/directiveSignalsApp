import { Component, WritableSignal, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
	selector: 'side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

	public menuItems: WritableSignal<MenuItem[]> = signal<MenuItem[]> ([
		{ title: 'Contador', route: 'counter' },
		{ title: 'Usuario', route: 'user-info' },
		{ title: 'Mutaciones', route: 'properties' },
	]);

	// public menuItems: MenuItem[] = [
	// 	{ title: 'Contdor', route: 'counter' },
	// 	{ title: 'Usuario', route: 'user-info' },
	// 	{ title: 'Mutaciones', route: 'properties' },
	// ];
}