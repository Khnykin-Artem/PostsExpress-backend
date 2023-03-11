import express from 'express';
import compression from 'compression';
import morganMiddleware from './middleware/morganMiddleware';
// import router from "./routes/index";

const app = express();

app.use(express.json());
app.use(compression());
app.use(morganMiddleware);

export default app;
