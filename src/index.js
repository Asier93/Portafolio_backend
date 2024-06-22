// index.js

import app from "./app.js";
import { connectDB } from "./db.js";

connectDB(); // Llama a la función connectDB para conectar con la base de datos
const PORT = 4001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
