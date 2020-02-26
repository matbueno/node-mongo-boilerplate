import { Router } from 'express'

import userRouter from '_user/api/router'

const router = Router()

router.use('', userRouter)

export default router
