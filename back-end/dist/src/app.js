import express from 'express';
import ImagesRouter from './routers/Images.router';
class App {
    app;
    constructor() {
        this.app = express();
        this.config();
        this.Routers();
    }
    config() {
        const accessControl = (req, res, next) => {
            const allowedOrigins = [
                'http://localhost:5173',
                'http://ex.com'
            ];
            const origin = req.headers.origin ?? ''; // se nao vir nada vai ser tornar uma string vazia
            if (allowedOrigins.includes(origin)) {
                res.header('Access-Control-Allow-Origin', origin);
            }
            res.header('Access-Control-Allow-Methods', 'GET');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
    }
    Routers() {
        this.app.use('/images', ImagesRouter);
    }
    start(PORT) {
        this.app.listen(PORT, () => { console.log(`Running on port ${PORT}`); });
    }
}
export default App;
