import { Router } from 'express'

import { userCreate, userLogin, userGet } from '_user/api/v1/controller'
import { auth } from '_middlewares'

const router = Router()

router.post('/sign-up', userCreate)

router.post('/login', userLogin)

router.get('/', auth, userGet)

export default router
