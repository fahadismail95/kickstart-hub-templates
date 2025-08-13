import { NestFactory } from '@nestjs/core'
import { Module, Controller, Get } from '@nestjs/common'
@Controller()
class AppController {
	@Get()
	getRoot() {
		return 'Welcome to NestJS Enterprise!'
	}
	@Get('api/data')
	getData() {
		return { message: 'Enterprise API Data' }
	}
}
@Module({ controllers: [AppController] })
class AppModule {}
async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	await app.listen(3000)
}
bootstrap()
