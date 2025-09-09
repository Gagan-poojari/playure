import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import user_router from "./routes/user.route.js";
import auth_router from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config();

const port = process.env.PORT || 8000;

const app = express()

// app.use(cors({ 
//     origin: "http://localhost:3001",
//     credentials: true
// }))

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3001"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", auth_router)
app.use("/api/user", user_router)
 
app.get("/", (req, res) => {
    res.send("API is running")
})

app.listen(port, () => {
    connectDB()
    console.log(`Server is running on port ${port}`)
})
