const { Router }= require('express')
const router = Router();
const {AddLead}= require('../controllers/administradores/AddLead')
const {AllLead}= require('../controllers/administradores/AllLead')


router.post('/lead', AddLead);
router.get('/lead', AllLead);


module.exports = router