import express from 'express'
import { deleteLibrosController, getLibrosController, getLibrosControllerOne, postLibrosController, updateLibrosController } from '../controllers/LibrosController.js'
const routes=express.Router()

routes.get('/',getLibrosController)
routes.get('/:id',getLibrosControllerOne)
routes.post('/',postLibrosController)
routes.put('/:id',updateLibrosController)
routes.delete('/:id',deleteLibrosController)

export default routes;