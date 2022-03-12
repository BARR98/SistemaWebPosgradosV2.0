import { Router } from 'express'
const router = Router();


import {createMaster, deleteMaster, getMasters, getMaster, updateMaster } from '../controllers/maestria.controller'

// middleware
// router.use(upload.single('image'));

// routes
router.route('/list')
    .get(getMasters);

router.route('/get-master/:id')
    .get(getMaster);

router.route('/create')
    .post(createMaster);
    
router.route('/update/:id')
    .put(updateMaster);

router.route('/delete/:id')
    .delete(deleteMaster);


export default router;