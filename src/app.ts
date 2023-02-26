import express from 'express';
import compression from 'compression';
// import router from "./routes/index";

const app = express();

app.use(compression());
app.use();

export default app;
