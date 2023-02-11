const express = require('express');
const helplineNumberController = require('../controllers/helplineNumbers');

const router = express.Router();

router.post('/', helplineNumberController.createHelplineNumber);
router.get('/', (req,res)=>{
    console.log('request hit on server')
    res.send('server running')
});
router.get('/:searchTerm', helplineNumberController.getHelplineNumber);

module.exports = router;
