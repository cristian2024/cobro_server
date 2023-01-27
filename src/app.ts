import express from "express";
import cors from "cors";
import router from "./routes/config/routes.config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); 
app.use('/api',router);





export default app;