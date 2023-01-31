import express, { Router } from "express";
import v1 from "../v1/config/routes";


const router: Router = express.Router();



router.use('/v1', v1);



export default router;