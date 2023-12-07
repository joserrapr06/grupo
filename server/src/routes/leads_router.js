const { Router }= require('express')
const router = Router();
const {AddLead}= require('../controllers/administradores/AddLead')
const {AllLead}= require('../controllers/administradores/AllLead')
const {ClientLead}= require('../controllers/administradores/ClientLead')
const {UpdateClient}= require('../controllers/administradores/UpdateClient')
const {DeleteClient}= require('../controllers/administradores/DeleteClient')



router.post('/lead', AddLead);
router.get('/lead/:clientId', ClientLead);
router.put('/lead/:clientId', UpdateClient);
router.delete('/lead/:clientId', DeleteClient);


router.get('/lead', AllLead);


module.exports = router