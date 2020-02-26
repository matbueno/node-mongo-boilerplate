import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import multer from 'multer'

import router from '_api/router'

import '_db'

dotenv.config()
const port = process.env.PORT || 3000

const upload = multer()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(upload.array())
app.use(router)

app.listen(port, () => {
  console.info(`[${process.env.NODE_ENV || 'Development'}] Server is running in port ${port}`)
})
