import express from 'express'
import models from '../../database/models/index'
const router = express.Router()

router.get('/',function(req,res){
    res.send("HELLO")
})

router.post('/',function(req,res){
    // eslint-disable-next-line no-undef
    console.log(req.body)
})

router.post('/board', function(req, res, next) {
    let body = req.body
  
    models.post.create({
        title: body.inputTitle,
        writer: body.inputWriter
    })
        .then( result => {
            // eslint-disable-next-line no-undef
            console.log(result)
        })
        .catch( err => {
            // eslint-disable-next-line no-undef
            console.log("데이터 추가 실패")
        })
})

router.get('/board', function(req, res, next) {
    models.post.findAll().then( result => {
        res.send(result)
    })
})

router.get('/board/:id', function(req, res, next) {
    models.post.findAll({where: {id: req.params.id}}).then( result => {
        res.send(result)
    })
})

router.use((req, res) => { 
    res.status(404).send('404')
})

router.use((err, req, res) => { 
    // eslint-disable-next-line no-undef
    console.error(err.stack)
    res.status(500).send('500')
})

export default router
