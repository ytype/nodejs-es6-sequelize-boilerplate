import express from 'express'
import bodyParser from 'body-parser'
import router from './router/index'
import models from '../database/models/index'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)

models.sequelize.sync().then( () => {
    // eslint-disable-next-line no-undef
    console.log("DB 연결 성공")
}).catch(err => {
    // eslint-disable-next-line no-undef
    console.log("연결 실패")
    // eslint-disable-next-line no-undef
    console.log(err)
})

app.listen(3000)
export default app
