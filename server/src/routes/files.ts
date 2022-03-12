import { Router } from 'express'
const router = Router();

import upload from '../lib-upload-file/multer'
import {  getFile,getFiles,deleteFile, createFile} from '../controllers/file.controller'

// middleware
// router.use(upload.single('image'));

// routes
router.route('/')
    .post(upload.single('file'), createFile);

router.route('/')
    .get(getFiles)
    
router.route('/:id')
    .get(getFile)
    .delete(deleteFile);

export default router;