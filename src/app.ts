import express from "express";
import cors from "cors"; 
import { router } from "./routes";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(router)


app.get("/", (_req, res) => {
	res.send("API is running....");
});


export default app;