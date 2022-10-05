import { Router } from 'express';
import TeacherController from '../app/controllers/TeacherController';

const router = Router();

router.post('/teacher', TeacherController.store);
router.get('/teacher', TeacherController.index);
router.get('/teacher/:id', TeacherController.show);
router.post('/teacher/add-class', TeacherController.addClass);

export default router;
