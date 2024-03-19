import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuRightComponent } from './components/side-menu-right/side-menu-right.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SignalsRoutingModule } from './signals-routing.module';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';

@NgModule({
	declarations: [
		CounterPageComponent,
		PropertiesPageComponent,
		SideMenuComponent,
		SideMenuRightComponent,
		SignalsLayoutComponent,
		UserInfoPageComponent,
	],
	exports: [
		SignalsLayoutComponent,
	],
	imports: [
		CommonModule,
		SignalsRoutingModule,
	]
})
export class SignalsModule {}