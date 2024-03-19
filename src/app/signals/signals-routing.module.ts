import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';

const routes: Routes = [
	{
		path: '',
		component: SideMenuComponent,
		children: [
			{ path: 'counter', component: CounterPageComponent },
			{ path: 'user-info', component: UserInfoPageComponent },
			{ path: 'properties', component: PropertiesPageComponent },
			{ path: '**', redirectTo: 'counter' },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild (routes)],
	exports: [RouterModule]
})
export class SignalsRoutingModule {}