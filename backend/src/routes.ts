import { Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';


 const routes = Router();
 const upload = multer(uploadConfig);


routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;

//o padrão do controller é ter os metodos
// INDEX, SHOW, CREATE, UPDATE, DELETE





// import { getRepository} from 'typeorm';
// import Orphanage from './models/Orphanage';