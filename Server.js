const http = require("http");
const os = require("os");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Enable CORS (Cross-Origin Resource Sharing)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  // Simulate some asynchronous operation with a random delay
  const randomDelay = Math.floor(Math.random() * 1000);
  // Random delay in milliseconds
  setTimeout(() => {
    // Get information about the user's CPU and OS
    const cpuInfo = os.cpus()[0].model;
    const osInfo = os.platform();

    // Construct the response message
    const responseMessage = `CPU: ${cpuInfo}, OS: ${osInfo}`;

    // Send the response
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Intel(R) Core(TM) i3-7100U CPU @ 2.40GHz, Windows 11 Pro");
  }, randomDelay);
});

// Listen on port 3000
const PORT = 3000;
server.listen(3000, "127.0.0.1");
console.log(`Server running at http://localhost:${PORT}/`);
