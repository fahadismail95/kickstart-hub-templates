import { Request, Response } from 'express'
export function homeController(req: Request, res: Response) {
	res.send('Welcome to Express + TypeScript Standard!')
}
