import { Router } from 'express'
const router = Router();

import upload from '../lib-upload-logo/multer'
import { getPhotos, createPhoto, deletePhoto, getPhoto} from '../controllers/photo.controller'

// middleware
// router.use(upload.single('image'));

// routes
router.route('/')
    .post(upload.single('image'), createPhoto);

router.route('/')
    .get(getPhotos)
    
router.route('/:id')
    .get(getPhoto)
    .delete(deletePhoto)

export default router;