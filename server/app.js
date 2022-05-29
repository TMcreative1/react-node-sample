import express from 'express';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import config from './config/config.js';
import db from './db/db.js';

db.init(config);
const app = express();
app.use(express.json());
app.use(cors());
app.use('/posts', postRoutes);
app.listen(config.app.port);
