import express from "express";
import { router } from "./routes/index.routes.js";

const app = express();
const PORT = 3000;

app.use('/v1', router);

app.listen(PORT, () =>
  console.log(`Server running ir http://localhost:${PORT}/v1`)
);
