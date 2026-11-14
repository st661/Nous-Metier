import express from 'express'
import userCtrl from '../controllers/user.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/user').post(userCtrl.create)
router.route('/api/user').get(userCtrl.list)

router.route('/api/user/:id')
.get(authCtrl.requireSignin, userCtrl.read)
.put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
.delete(authCtrl.requireSignin, authCtrl.hasAuthorization,userCtrl.remove)

router.param('id', userCtrl.userByID)
router.route('/api/user/:id').get(userCtrl.read)
router.route('/api/user/:id').put(userCtrl.update)
router.route('/api/user/:id').delete(userCtrl.remove)
router.route('/api/user/').delete(userCtrl.removeAll)

export default router