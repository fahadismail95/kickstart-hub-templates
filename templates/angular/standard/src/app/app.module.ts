import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home.component'
import { AboutComponent } from './components/about.component'
import { DataService } from './services/data.service'
@NgModule({
	declarations: [AppComponent, HomeComponent, AboutComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent },
			{ path: 'about', component: AboutComponent },
		]),
	],
	providers: [DataService],
	bootstrap: [AppComponent],
})
export class AppModule {}
