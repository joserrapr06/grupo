const { Router }= require('express')
const router = Router();
const {AddLead}= require('../controllers/administradores/AddLead')


router.post('/lead', AddLead)

module.exports = router