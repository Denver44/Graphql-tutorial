import app from "../app.js";
import route from "../routes/company.js";

app.use("/api/", route);

export default app;
