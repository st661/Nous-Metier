import express from 'express';
import jobCtrl from '../controllers/job.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/jobs')
.get(jobCtrl.list)
.post(authCtrl.requireSignin, jobCtrl.create)

router.route('/api/jobs/:jobId')
.get(jobCtrl.read)
.put(authCtrl.requireSignin, jobCtrl.isPoster, jobCtrl.update)
.delete(authCtrl.requireSignin, jobCtrl.isPoster, jobCtrl.remove)

router.param('jobId', jobCtrl.jobByID)

export default router;
