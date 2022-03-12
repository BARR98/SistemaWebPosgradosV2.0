import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';
import cors from 'cors'

// Routes
import imageRoutes from './routes/photos'
import masterRoutes from './routes/maestrias'
import filesRoutes from './routes//files'

class Applicaction {

    app: express.Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        // this folders for this application will be used to store public file images
        this.app.use('/logos', express.static(path.resolve('logos')));
        this.app.use('/uploaded-files', express.static(path.resolve('uploades-files')));


    }

    settings() {
        this.app.set('port', 4000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(cors()); //PERMITE COMUNICACION DESDE FUERA DEL SERVIDOR
        

    }

    routes() {
        this.app.use('/images', imageRoutes );
        this.app.use('/masters', masterRoutes );
        this.app.use('/files', filesRoutes );
    }

    
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Server is running at', this.app.get('port'));
        });
    }
}

export default Applicaction;