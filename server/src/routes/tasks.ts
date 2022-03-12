import { Router, Request, Response } from 'express';
const router = Router();

// Model
import Task from '../models/Task';

router.route('/create')
    .post(async (req: Request, res: Response) => {
        const { title, description } = req.body;
        const task = new Task({ title, description });
        await task.save();
        res.json(task)
    });

router.route('/list')
    .get(async (req: Request, res: Response) => {
        const tasks = await Task.find();
        res.json(tasks)
    });

router.route('/delete/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.json({
            status: 'Eliminado correctamente'
        })
        
        
    });

router.route('/edit/:id')
    .post(async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, description } = req.body;
        await Task.findByIdAndUpdate(id, {
            title, description
        });
        res.json({
            status: 'Actualizado correctamente'
        })
       
    })

export default router;