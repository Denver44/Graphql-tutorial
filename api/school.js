import app from "../app.js";
import route from "../routes/school.js";

app.use("/api/", route);

export default app;
