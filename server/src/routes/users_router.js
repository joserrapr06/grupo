const { Router }= require('express')
const router = Router();
const {Users}= require('../controllers/administradores/Users')


router.get('/users', Users)

module.exports = router