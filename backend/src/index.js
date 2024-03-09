import app from "./app";
import { PORT } from "./config";


app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
