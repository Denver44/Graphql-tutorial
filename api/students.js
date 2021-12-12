import app from "../app.js";
import route from "../routes/student.js";

app.use("/api/", route);

export default app;
