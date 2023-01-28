import app from "./app";

import { PORT } from "./config/env.config";

import dataBase from "./database/db.config";

dataBase.authenticate().then((_) => {
  console.log('Database connected succesfully');
  app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
  });
}).catch((_)=>{
  console.log('Server database was not connected');
});
