import { runBot } from "./adapters/bot.mjs";
import { db } from "./db/db.mjs";
import { initApp } from "./initApp.mjs";
import { config } from "dotenv";

config();

const app = initApp();

const url = process.env.MONGO_URL || "mongodb://0.0.0.0:27017";

db.run(url);
runBot();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("...server started in port " + PORT);
});
