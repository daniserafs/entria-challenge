// not working yet, also im not sure this is what i need for the CORS communication

const { Router } = require("express");

const controller = require('./server')

const router = new Router()

router.get('/', controller.show)