import { Component, WritableSignal, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
	selector: 'side-menu-right',
	templateUrl: './side-menu-right.component.html',
	styleUrls: ['./side-menu-right.component.css']
})
export class SideMenuRightComponent {

	public pagesItems: WritableSignal<MenuItem[]> = signal<MenuItem[]> ([
		{ title: 'Productos', route: './products' },
		{ title: 'Signals', route: './signals' },
	]);
}