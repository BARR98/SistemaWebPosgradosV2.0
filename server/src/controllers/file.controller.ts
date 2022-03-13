import { request, Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'

// Models
import MyFile , {IPhoto} from '../models/File';

export async function getFiles(req: Request, res: Response): Promise<Response> {
    const files = await MyFile.find();
    return res.json(files);
};



export async function createFile(req: Request, res: Response): Promise<Response> {
    try{
        const { title, description , master } = req.body;
        const newFile = { title, description, master ,imagePath: req.file.path};
        const file = new MyFile(newFile);
        await file.save();
        return res.json({
            message: 'Photo Saved Successfully',
            file
        });
    }
    catch(e){
        res.json('Error')
    }

};

export async function getFile(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const file = await MyFile.findById(id);
    return res.json(file);
}

export async function deleteFile(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const file = await MyFile.findByIdAndRemove(id) as IPhoto;
    if (file) {
        await fs.unlink(path.resolve(file.imagePath));
    }
    return res.json({ message: 'File Deleted' });
};
