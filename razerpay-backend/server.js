import "./src/env.js";  // ⭐ FIRST
import app from "./src/app.js";
const PORT = process.env.PORT || 8100;
import connDB from "./src/config/db.js";

const startServer = async () => {
  try {
    await connDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
