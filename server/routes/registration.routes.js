import express from 'express'
import registrationCtrl from '../controllers/registration.controller.js'

const router = express.Router()

router.route('/api/registration').post(registrationCtrl.create)
router.route('/api/registration').get(registrationCtrl.list)
router.param('id', registrationCtrl.registrationByID)
router.route('/api/registration/:id').get(registrationCtrl.read)
// Update a registration by id
router.route('/api/registration/:id').put(registrationCtrl.update)
// Delete a registration by id
router.route('/api/registration/:id').delete(registrationCtrl.remove)
// Delete all registrations
router.route('/api/registration/').delete(registrationCtrl.removeAll)

export default router