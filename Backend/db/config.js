

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-com", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 30000
})
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    })



















// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/e-com", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 30000 // Increase timeout
// })
// .then(() => console.log("Connected to MongoDB successfully"))
// .catch(err => {
//     console.error("Error connecting to MongoDB:", err);
//     process.exit(1); // Exit the process with a non-zero status code on error
// });