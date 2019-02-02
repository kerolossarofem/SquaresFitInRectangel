const express = require('express');
const router = express.Router();
const rhandler= require('../process/handleRequest');

//handle get method
router.get('/', (req, res, next) => {
    rhandler.handleRequest(req,res,next);
});

//handle post method
router.post('/', (req, res, next) => {
    rhandler.handleRequest(req,res,next);
});

module.exports = router;