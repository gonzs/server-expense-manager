const app = require('./app');
const port = 4000;

// Create server
app.listen(port, () => {
    console.log("Server running correctly");
})