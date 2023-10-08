import "reflect-metadata";
import app from "./app";

//DataBase
import { AppDataSource } from "./database/data-sources";

app.listen(process.env.PORT, async () => {
  await AppDataSource.initialize();

  console.log(`servidor corriendo en puerto ${process.env.PORT} `);
});