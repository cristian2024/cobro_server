import express, { Router } from "express";
import v1 from "./routes.v1";


const router: Router = express.Router();



router.use('/v1', v1);

// router for not implemented routes
router.use("***", (_req, res) => {
  res.status(404).json({
    success: false,
    mssg: "We haven't implemented this functionality yet",
  });
});

export default router;