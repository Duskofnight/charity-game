import express from "express";
import path from "path";

const app = express();
const PORT = 8080;

// Serve static files from the React build folder
app.use(express.static(path.join("dist")));

// Serve index.html for any unknown routes (to support React Router)
app.get("*", (req, res) => {
    res.sendFile(path.join("dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running`);
});

