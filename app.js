const express = require("express");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/UserRoutes");
const roleRoutes = require("./routes/RoleRoutes");

const { default: mongoose } = require("mongoose");

app.use(express.json());
app.use("/user", userRoutes);
app.use("/role", roleRoutes);

var db = mongoose.connect("mongodb://127.0.0.1:27017/bookopedia", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

db.then(() => {
    console.log("MongoDb connection established successfully");
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log("Server started on port: ", PORT);
})
