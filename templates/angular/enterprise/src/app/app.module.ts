import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { AuthModule } from './features/auth/auth.module'
import { DashboardModule } from './features/dashboard/dashboard.module'
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		AuthModule,
		DashboardModule,
		RouterModule.forRoot([
			{
				path: '',
				loadChildren: () =>
					import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
			},
			{
				path: 'login',
				loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
			},
		]),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
