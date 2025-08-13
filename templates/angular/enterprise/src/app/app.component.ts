import { Component } from '@angular/core'
@Component({
	selector: 'app-root',
	template: `
		<nav>
			<a routerLink="/">Dashboard</a> |
			<a routerLink="/login">Login</a>
		</nav>
		<router-outlet></router-outlet>
	`,
})
export class AppComponent {}
