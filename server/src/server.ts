import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use(routes);

const port = process.env.port || 5000
app.listen(port, () => console.log(`Listening to port ${port}`));