import { Request, Response } from 'express'
import { getData } from '../services/apiService'
export function homeController(req: Request, res: Response) {
	res.send('Welcome to Express + TypeScript Enterprise!')
}
export function apiDataController(req: Request, res: Response) {
	res.json(getData())
}
