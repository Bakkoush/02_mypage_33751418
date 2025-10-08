//My webpage app

var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    // Set the correct content type to HTML
    res.writeHead(200, { "Content-Type": "text/html" });

    // Properly structured HTML content
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About Mohammed Bakkoush</title>
    </head>
    <body>
        <h1>Welcome to My Web Page</h1>
        <h2>About Me</h2>
        <p>My name is <strong>Mohammed Bakkoush</strong>. I am currently working in Apple Retail.</p>
        <p>I have a deep passion for <strong>computers and technology</strong>.</p>
        <p>My favourite video game is <em>Kingdom Hearts 2 Final Mix</em>.</p>
        <p>My favourite sport is <strong>the UFC</strong>.</p>
    </body>
    </html>
    `;

    res.end(htmlContent);
}).listen(port, function() { 
    console.log(`Node server is running on port ${port}...`); 
}); 
