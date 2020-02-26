import { Router } from 'express'

import userRouter from '_user/api/v1/router'

const router = Router({ mergeParams: true })

router.use('/api/v1/users', userRouter)

export default router
