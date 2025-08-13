import { Component } from '@angular/core'
@Component({
	selector: 'app-login',
	template: `
		<form>
			<h2>Login</h2>
			<input placeholder="Username" />
			<input type="password" placeholder="Password" />
			<button type="submit">Login</button>
		</form>
	`,
})
export class LoginComponent {}
