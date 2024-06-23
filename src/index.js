import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
const PORT = 4001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
