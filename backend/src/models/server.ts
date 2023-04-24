import express, { Application } from 'express';
import routesProduct from '../routes/product';
import routesUser from '../routes/user';
import cors from 'cors';
import { Product } from './product';
import { User } from './user';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Aplicacion corriendo en el puerto " + this.port);
        })
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        
    }

    routes() {
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
    }
    async dbConnection(){
        try {
           // await Product.sync({ alter: true }); 
            //await User.sync();
            console.log('db Online');
        } catch (error) {
            console.error(error);
        }
    }
}
export default Server; 