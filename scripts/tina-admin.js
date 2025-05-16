// This script will help start TinaCMS directly
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Create the directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, '../public/admin'))) {
  fs.mkdirSync(path.join(__dirname, '../public/admin'), { recursive: true });
}

// Create a simple HTML file that redirects to the TinaCMS admin
const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>TinaCMS Admin</title>
  <meta http-equiv="refresh" content="0;url=http://localhost:9000/altair/">
  <script>
    window.location.href = "http://localhost:9000/altair/";
  </script>
</head>
<body>
  <p>Redirecting to TinaCMS admin...</p>
  <p><a href="http://localhost:9000/altair/">Click here if you are not redirected automatically</a></p>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '../public/admin/index.html'), adminHtml);

console.log('Starting TinaCMS server...');
try {
  execSync('npx tinacms dev', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to start TinaCMS server:', error);
} 