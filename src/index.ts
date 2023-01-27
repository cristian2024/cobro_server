import app from './app';

import { PORT } from './config/env.config';




app.listen(PORT, () => {
  console.log('Server started on port '+PORT);
})